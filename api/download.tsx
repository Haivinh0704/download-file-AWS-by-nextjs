import { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";
import {
  HTTP_BAD_REQUEST,
  HTTP_BAD_REQUEST_RESPONSE
} from "src/server/http-codes";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const mediaUrl = req.query?.media as string;
  if (!mediaUrl) {
    res.status(HTTP_BAD_REQUEST).json(HTTP_BAD_REQUEST_RESPONSE);
    return;
  }

  const filename = mediaUrl.split("/").slice(-1).toString();
  const response = await fetch(mediaUrl);
  if (!response.ok) {
    res.status(HTTP_BAD_REQUEST).json(HTTP_BAD_REQUEST_RESPONSE);
    return;
  }

  res.setHeader("Content-Type", "application/octet-stream");
  res.setHeader("Content-Disposition", `attachment; filename=${filename}`);
  res.send(response.body);
};

export default handler;
