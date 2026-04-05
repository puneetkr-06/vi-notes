import { Request, Response } from "express";
import { IUser } from "../models/userModel";
import mongoose from "mongoose";

const jwt = require("jsonwebtoken");

const getJwtExpiresIn = () => {
  const rawValue = process.env.JWT_EXPIRES_IN?.trim();

  if (!rawValue) return "7d";

  // Plain numeric env values are easy to misread. Treat them as days so
  // JWT_EXPIRES_IN=7 behaves like "7d" instead of expiring almost instantly.
  if (/^\d+$/.test(rawValue)) return `${rawValue}d`;

  return rawValue;
};

const signToken = (id: mongoose.Types.ObjectId | string): string => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: getJwtExpiresIn(),
  });
};

const getCookieOptions = (req: Request, maxAge: number) => {
  const isProduction = process.env.NODE_ENV === "production";
  const isSecureRequest =
    isProduction || req.secure || req.headers["x-forwarded-proto"] === "https";

  return {
    expires: new Date(Date.now() + maxAge),
    maxAge,
    httpOnly: true,
    secure: isSecureRequest,
    sameSite: (isProduction ? "none" : "lax") as "none" | "lax",
  };
};

const createSendToken = (
  user: IUser,
  statusCode: number,
  req: Request,
  res: Response,
) => {
  const token = signToken(user._id);
  const cookieExpiresInDays = Number(process.env.JWT_COOKIE_EXPIRES_IN || 7);
  const cookieMaxAge = cookieExpiresInDays * 24 * 60 * 60 * 1000;
  const cookieOptions = getCookieOptions(req, cookieMaxAge);

  res.cookie("jwt", token, cookieOptions);

  // Remove password from output
  user.password = undefined as any;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

export { signToken, createSendToken, getCookieOptions };
