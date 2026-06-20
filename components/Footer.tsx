import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer
      className="
      py-8
      border-t
      border-slate-200
      "
    >
      <div
        className="
        max-w-6xl
        mx-auto
        px-6
        text-center
        "
      >
        <h3 className="font-bold">
          {profile.name}
        </h3>

        <p className="text-slate-500 mt-2">
          {profile.tagline}
        </p>
      </div>
    </footer>
  );
}