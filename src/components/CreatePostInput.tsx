"use client";

import { useState } from "react";
import Image from "next/image";
import { useMutation } from "@apollo/client";
import { CREATE_PUBLIC_POST } from "../../graphql/mutations/publicPost";

export default function CreatePostInput() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [createPost, { loading, error }] = useMutation(CREATE_PUBLIC_POST);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file)); // For preview
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    let imageUrl = "";

    // Optional: Upload image first or convert to base64
    if (imageFile) {
      // Method 1: Convert to base64 (quick & dirty for testing)
      const reader = new FileReader();
      reader.onloadend = async () => {
        imageUrl = reader.result as string;

        try {
          await createPost({
            variables: {
              title,
              description,
              image: imageUrl, // sending base64 string
            },
          });

          setTitle("");
          setDescription("");
          setImageFile(null);
          setImagePreview(null);
        } catch (err) {
          console.error("Post creation failed:", err);
        }
      };

      reader.readAsDataURL(imageFile); // triggers reader.onloadend
    } else {
      // No image
      await createPost({
        variables: { title, description, image: "" },
      });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-2xl flex flex-col gap-4 shadow"
    >
      {/* Avatar and Title */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 relative rounded-full overflow-hidden">
          <Image
            src="/assets/images/avatar.heic"
            alt="User Avatar"
            fill
            className="object-cover"
          />
        </div>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title"
          className="flex-1 py-2 px-4 bg-gray-100 text-gray-800 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Description */}
      <textarea
        rows={3}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Write more about your post..."
        className="w-full py-2 px-4 bg-gray-100 rounded-lg text-sm text-gray-800 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
      />

      {/* Image file upload */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="text-sm"
      />

      {/* Preview selected image */}
      {imagePreview && (
        <div className="w-full h-48 relative rounded-lg overflow-hidden border">
          <Image src={imagePreview} alt="Preview" fill className="object-cover" />
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-lg text-sm"
      >
        {loading ? "Posting..." : "Create Post"}
      </button>

      {error && (
        <p className="text-red-500 text-xs mt-2">
          Something went wrong. Try again.
        </p>
      )}
    </form>
  );
}
