import React from "react";
import photo2 from "../assets/photo2.jpg";
function About() {
  return (
    <>
      <section
        id="about"
        className="bg-emerald-50 text-emerald-900 py-20 px-6  rounded-t-4xl"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* <!-- Image --> */}
          <div>
            <img
              src={photo2}
              alt="Farm fresh vegetables"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>

          {/* <!-- Text Content --> */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
            <p className="text-lg leading-relaxed mb-4">
              At <span className="font-semibold">GreenHarvest</span>, we believe
              that real goodness starts with fresh, natural ingredients. Our
              journey begins at local farms, where every vegetable is grown with
              care and harvested at its peak.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              From soil to your table, we ensure quality, sustainability, and
              purity in everything we deliver. Whether you’re cooking for your
              family or preparing a special meal, we bring the best of nature to
              your kitchen.
            </p>
            <p className="text-lg font-medium italic text-emerald-800">
              Rooted in freshness. Grown for you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
