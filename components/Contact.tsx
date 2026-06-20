import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-blue-700 font-semibold">CONTACT</p>

        <h2 className="text-4xl font-bold mt-3">Let's Connect</h2>

        <p
          className="
          mt-6
          text-slate-600
          "
        >
          Open to internship opportunities, research collaborations, and data
          science projects.
        </p>

        <a
          href="mailto:muhammadilyas12114@gmail.com"
          className="
  inline-block
  mt-8
  px-8
  py-4
  bg-blue-700
  text-white
  rounded-xl
  font-semibold
  hover:bg-blue-800
  transition
  "
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
