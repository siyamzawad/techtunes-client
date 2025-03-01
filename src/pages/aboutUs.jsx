const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        About <span className="text-orange-500">Tech</span>Tunes
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Welcome to TechTunes, where innovation meets music technology. Our
        mission is to create cutting-edge solutions that enhance the music
        experience for both creators and consumers. With a team of passionate
        individuals, we aim to revolutionize the way music is made, shared, and
        enjoyed.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Vision
        </h2>
        <p className="text-gray-600">
          At TechTunes, we envision a world where technology and music are
          seamlessly integrated, providing unparalleled experiences for music
          lovers, artists, and creators alike. We believe that the future of
          music lies in innovation and creativity, and we’re here to lead the
          way.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Values
        </h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            Innovation: Constantly pushing the boundaries of what's possible.
          </li>
          <li>Creativity: Encouraging unique ideas and artistic expression.</li>
          <li>Collaboration: Building a community that thrives together.</li>
          <li>Quality: Delivering the best in every product and service.</li>
          <li>Passion: Driven by a love for music and technology.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              John Doe
            </h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Jane Smith
            </h3>
            <p className="text-gray-600">CTO</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Alice Johnson
            </h3>
            <p className="text-gray-600">Head of Marketing</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-600">
          If you have any questions, feedback, or inquiries, feel free to reach
          out to us at{" "}
          <a href="mailto:contact@techtunes.com" className="text-orange-600">
            contact@techtunes.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
