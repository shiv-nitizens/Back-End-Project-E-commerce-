const About = () => {
  return (
    <div className="max-padd-container py-16">

      {/* About Website Section */}
      <section className="mb-16">
        <h2 className="bold-32 mb-4">About Our Store</h2>

        <p className="text-gray-30 max-w-3xl">
          Our platform was created to make online shopping simple, reliable,
          and enjoyable. We aim to provide high-quality products while
          ensuring a seamless browsing and purchasing experience for our
          customers.
        </p>
      </section>


      {/* Team Section */}
      <section>
        <h2 className="bold-32 mb-6">Meet the Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="bold-18">Member Name</h3>
            <p className="text-gray-30">Role / Contribution</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="bold-18">Member Name</h3>
            <p className="text-gray-30">Role / Contribution</p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;