import { teamMembers } from "../assets/teamData";

const About = () => {
  return (
    <div className="max-padd-container py-16">

      <section className="mb-16">
        <h2 className="bold-32 mb-4">About Our Store</h2>

        <p className="text-gray-30 max-w-3xl">
          Our platform was created to make online shopping simple, reliable,
          and enjoyable. We aim to provide high-quality products while
          ensuring a seamless browsing and purchasing experience for our
          customers.
        </p>
      </section>


      <section>
        <h2 className="bold-32 mb-6">Meet the Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
            <div
                key={member.id}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center"
            >
                <h3 className="bold-18">{member.name}</h3>
                <p className="bold-15">Contribution:</p>
                <p className="text-gray-30">{member.Contribution}</p>
            </div>
        ))}

        </div>
      </section>

    </div>
  );
};

export default About;