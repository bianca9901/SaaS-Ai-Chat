"use client";

import React, { useEffect, useState } from "react";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";

interface ImageUploadProps {
  value: string;
  onChange: (src: string) => void;
  disabled?: boolean;
}

function ImageUpload({ value, onChange, disabled }: ImageUploadProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set isMounted to true after component mounts to prevent hydration errors
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Prevent rendering on the server side to avoid hydration error
    return null;
  }

  return (
    <div className="space-y-4 w-full flex flex-col justify-center items-center">
      <CldUploadButton
        onUpload={(result: any) => onChange(result.info.secure_url)}
        options={{
          maxFiles: 1,
        }}
        uploadPreset="ffmnpjs0"
      >
        <div
          className="p-4 border-4 border-dashed border-primary/10 rounded-lg 
      hover:opacity-75 transition flex flex-col space-y-1 items-center
      justify-center"
        >
          <div className="relative h-40 w-40">
            <Image
              fill
              alt="upload"
              src={value || "/placeholder.svg"}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </CldUploadButton>
    </div>
  );
}

export default ImageUpload;
