import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "harsh Vandana Sharma",
    role: "Founder & CEO",
    avatar: "A",
    bg: "bg-amber-400",
    text: "text-black",
  },
  {
    id: 2,
    name: "Devendra Dhote",
    role: "Head of Product",
    avatar: "P",
    bg: "bg-blue-500",
    text: "text-white",
  },
  {
    id: 3,
    name: "Sarthak Sharma ",
    role: "Lead Engineer",
    avatar: "R",
    bg: "bg-purple-500",
    text: "text-white",
  },
  {
    id: 4,
    name: "Pradyumna b",
    role: "Design Director",
    avatar: "S",
    bg: "bg-rose-500",
    text: "text-white",
  },
];

const MeetTeam = () => {
  return (
    <section className="w-full bg-black py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Meet the Team
          </h2>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="
                w-full
                min-h-62.5
                rounded-3xl
                border
                border-white
                bg-[#111111]
                p-8
                flex
                flex-col
                items-center
                justify-center
                text-center
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-amber-600
                hover:shadow-xl
              "
            >
              {/* Avatar */}

              <div
                className={`
                  h-20
                  w-20
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-3xl
                  font-bold
                  ${member.bg}
                  ${member.text}
                `}
              >
                {member.avatar}
              </div>

              {/* Name */}

              <h3 className="mt-7 text-2xl font-semibold text-white">
                {member.name}
              </h3>

              {/* Role */}

              <p className="mt-2 text-neutral-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTeam;
