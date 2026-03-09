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


      <section className="mb-16">
        <h2 className="bold-32 mb-6">Meet the Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
            <div
                key={member.id}
                className="relative group bg-white p-6 rounded-lg shadow text-center overflow-hidden"
            >
                <h3 className="bold-18">{member.name}</h3>
                <p className="bold-15">Contribution:</p>
                <p className="text-gray-30">{member.Contribution}</p>

                <div className="absolute inset-0 bg-gray-900 text-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition z-20">

                    <h4 className="font-semibold mb-3">Socials</h4>

                    <div className="flex gap-4 text-sm">
                        {member.github && (
                            <a
                                href={member.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-30 transition"
                                >
                                GitHub
                            </a>
                        )}
                    </div>
                </div>
            </div>
        ))}

        </div>
      </section>

      <section className="flex justify-center gap-10 text-center">
        <div>
            <h3 className="bold-24">4</h3>
            <p className="text-gray-30">Team Members</p>
        </div>

        <div>
            <h3 className="bold-24">5+</h3>
            <p className="text-gray-30">Features Built</p>
        </div>
    </section>

    </div>
  );
};

export default About;