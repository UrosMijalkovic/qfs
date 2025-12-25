"use client";

import { useState } from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Miloš Golić",
    role: "Managing Partner",
    photo: "/team/Milos Golic.jpg",
    shortBio: "Over 13 years in business and financial advisory with 9+ years in top-level executive roles. Bocconi University graduate specializing in Investment Banking and Quantitative Finance.",
    fullBio: `Miloš Golić is a Managing Partner at QFS with over 13 years of experience in business and financial advisory and more than 9 years in top-level executive roles within international corporations. He completed his undergraduate studies at the University of California, Santa Barbara, and earned a Master's degree in Finance from Bocconi University in Milan, specializing in Investment Banking and Quantitative Finance.

Miloš began his career in international consulting, where he worked as a Senior Consultant delivering numerous projects and transactions across a wide range of industries. He later joined a large international manufacturing group, serving as Chief Financial Officer and subsequently as Group CFO at the global level, appointed by the parent company in Northern Europe. From 2019 onward, he served as Group CFO of a renowned multinational group headquartered in Norway.

His expertise includes company valuations, business planning, feasibility studies, corporate restructuring, transaction advisory, and strategic financial leadership. In parallel with his corporate roles, Miloš has been actively involved in developing QFS's business, financial, and transaction advisory services. He is a member of the American Society of Appraisers and a CFA Level I candidate.`,
    credentials: ["UC Santa Barbara", "Bocconi University", "ASA Member", "CFA Candidate"],
  },
  {
    name: "Ivan Djurović",
    role: "Partner",
    photo: "/team/Ivan Djurovic.jpg",
    shortBio: "Over 10 years in financial advisory, valuation, and business planning. Bocconi University graduate with experience at the European Commission.",
    fullBio: `Ivan Djurović is a Partner at QFS with over 10 years of hands-on experience in financial advisory, valuation, and business planning. He completed his undergraduate studies in Serbia and earned a Master's degree in Economics and Social Sciences from Bocconi University in Milan.

During his studies, Ivan worked at the European Commission in Brussels. He later joined an international consulting firm in Belgrade, where he advanced to Senior Consultant in the Valuation and Business Planning department. In 2017, he became a Partner at QFS Business and Financial Advisory.

Ivan has extensive experience leading finance and accounting teams for European, US, and Scandinavian clients, and providing direct support to CEOs and CFOs. His core competencies include financial modeling, valuations, management reporting, budgeting and forecasting, automation of finance functions, SOP implementation, and controlling. He is a candidate for the Accredited Senior Appraiser certification from the American Society of Appraisers.`,
    credentials: ["Bocconi University", "European Commission", "ASA Candidate"],
  },
  {
    name: "Anđela Stojković",
    role: "Senior Associate",
    photo: "/team/Andjela Stojkovic.jpg",
    shortBio: "Over five years of experience in financial and business advisory. Expert in corporate finance projects and business consulting.",
    fullBio: `Anđela Stojković is a Senior Associate at QFS. She graduated from the Faculty of Organizational Sciences at the University of Belgrade in 2020, majoring in Management and Organization.

Before joining QFS, Anđela gained professional experience across several established companies, primarily in sales and marketing roles with a strong focus on customer engagement and growth. She joined QFS in August 2020 as an Analyst and was promoted to Senior Associate in early 2024.

Anđela has over five years of experience in financial and business advisory, with involvement in corporate finance projects, business consulting, and professional client support. She is recognized for strong analytical capabilities, project management skills, process improvement experience, and effective communication, enabling her to contribute successfully across diverse business environments.`,
    credentials: ["University of Belgrade"],
  },
  {
    name: "Neda Zloporubović",
    role: "Manager – Supply Chain",
    photo: "/team/Neda Zloporubovic.jpg",
    shortBio: "Over nine years of international experience in procurement and supply chain leadership across automotive, manufacturing, and energy sectors.",
    fullBio: `Neda Zloporubović is a Manager specializing in Supply Chain Advisory at QFS. She earned a Bachelor's degree in Business Economics from Singidunum University in Belgrade and a Master's degree in Internal Audit from the same institution. She is currently a PhD candidate in Business Management and Organization.

Neda brings over nine years of international experience in procurement and supply chain leadership across automotive, manufacturing, and energy sectors. Prior to joining QFS in October 2023, she held senior roles in international corporations, including positions in project, commodity, and strategic procurement.

Her track record includes leading more than 50 projects across Europe and global markets, delivering sustainable cost savings of up to 30%, negotiating global contracts, and building resilient, risk-managed supply chains. She is known for strategic vision, cross-functional leadership, and driving operational excellence and transformation.`,
    credentials: ["Singidunum University", "PhD Candidate"],
  },
  {
    name: "Ana Krstonić",
    role: "Consultant",
    photo: "/team/Ana Krstonic.jpg",
    shortBio: "Over seven years of experience in financial advisory with expertise in financial reporting, budgeting, and controlling.",
    fullBio: `Ana Krstonić is a Consultant at QFS with over seven years of experience in financial advisory. She graduated from the Faculty of Economics at the University of Belgrade, majoring in Economic Analysis and Policy.

Ana began her career as an analyst in an international company, gaining experience in financial reporting and analysis. She joined QFS in 2020 as a Financial Analyst and has been working as a Consultant since January 2025, focusing on controlling and reporting projects for domestic and international clients.

Her expertise includes financial reporting, budgeting, controlling, and analytical support for management decision-making. Ana is valued for her analytical rigor, clear communication, and ability to build trusted client relationships.`,
    credentials: ["University of Belgrade"],
  },
  {
    name: "Milica Stanić",
    role: "Junior Analyst",
    photo: "/team/Milica Stanic.jpeg",
    shortBio: "Experience in finance and accounting support, financial reporting, and process improvement initiatives.",
    fullBio: `Milica Stanić is a Junior Analyst at QFS. She completed her undergraduate studies in Management and Organization at the Faculty of Organizational Sciences, University of Belgrade, and earned a Master's degree in Human Resource Management from the same faculty.

Milica gained early professional experience as a Kaizen Consultant intern and later worked as a Quality Planner in an international corporation. She joined QFS in February 2024.

Her experience includes finance and accounting support, payment flow monitoring, financial reporting, documentation management, and participation in planning and process improvement initiatives. Milica is proactive, adaptable, and collaborative, with a strong focus on operational accuracy and results.`,
    credentials: ["University of Belgrade"],
  },
  {
    name: "Tamara Đorđević",
    role: "Junior Analyst",
    photo: "/team/Tamara Djordjevic.jpeg",
    shortBio: "Over seven years of professional experience spanning sales, operational support, and financial services.",
    fullBio: `Tamara Đorđević is a Junior Analyst at QFS, holding a Bachelor's degree in Management from the Faculty of Applied Management, Economics and Finance, Business Academy Novi Sad.

With more than seven years of professional experience, Tamara has built a diverse career spanning sales, operational support, and financial services. She joined QFS in January 2025 and primarily supports international clients.

Her scope of work includes finance function outsourcing, financial analysis, business reporting, benchmarking, and client relationship management. Tamara is recognized for her strong organizational skills, communication abilities, and persistence, thriving both independently and in team-oriented environments.`,
    credentials: ["Business Academy Novi Sad"],
  },
];

interface TeamMemberCardProps {
  member: typeof teamMembers[0];
  onOpenBio: () => void;
}

function TeamMemberCard({ member, onOpenBio }: TeamMemberCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-border-gray overflow-hidden hover:shadow-xl hover:border-accent/20 transition-all duration-300">
      {/* Photo */}
      <div className="relative aspect-[4/5] overflow-hidden bg-light-gray">
        <img
          src={member.photo}
          alt={member.name}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* View bio button on hover */}
        <button
          onClick={onOpenBio}
          className="absolute bottom-4 left-4 right-4 py-3 px-4 bg-white/95 backdrop-blur-sm rounded-lg text-[14px] font-medium text-near-black opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-accent hover:text-white"
        >
          View Full Bio
        </button>
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-near-black">
          {member.name}
        </h3>
        <p className="text-[14px] text-accent font-medium mt-1">
          {member.role}
        </p>
        <p className="text-[14px] text-text-gray leading-relaxed mt-3 line-clamp-3">
          {member.shortBio}
        </p>

        {/* Credentials */}
        <div className="mt-4 flex flex-wrap gap-2">
          {member.credentials.slice(0, 2).map((credential, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-light-gray rounded text-[11px] font-medium text-text-gray"
            >
              {credential}
            </span>
          ))}
          {member.credentials.length > 2 && (
            <span className="px-2 py-1 bg-light-gray rounded text-[11px] font-medium text-text-gray">
              +{member.credentials.length - 2}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

interface BioModalProps {
  member: typeof teamMembers[0] | null;
  onClose: () => void;
}

function BioModal({ member, onClose }: BioModalProps) {
  if (!member) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-light-gray transition-colors"
        >
          <svg className="w-5 h-5 text-near-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid md:grid-cols-5 h-full">
          {/* Photo - fixed width column */}
          <div className="md:col-span-2 bg-light-gray">
            <div className="h-48 md:h-full">
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Content - scrollable */}
          <div className="md:col-span-3 bg-white p-6 md:p-8 overflow-y-auto max-h-[50vh] md:max-h-[80vh]">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-near-black">
                {member.name}
              </h2>
              <p className="text-accent font-medium mt-1">
                {member.role}
              </p>
            </div>

            {/* Credentials */}
            <div className="flex flex-wrap gap-2 mb-6">
              {member.credentials.map((credential, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-accent/10 rounded-full text-[12px] font-medium text-accent"
                >
                  {credential}
                </span>
              ))}
            </div>

            {/* Full bio */}
            <div className="space-y-4">
              {member.fullBio.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-[15px] text-text-primary leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  // Separate leadership (Partners) from team
  const leadership = teamMembers.filter(m => m.role.includes("Partner"));
  const team = teamMembers.filter(m => !m.role.includes("Partner"));

  return (
    <>
      <section className="py-20 lg:py-28 bg-light-gray">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[12px] font-semibold tracking-widest uppercase text-accent">
              Our People
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-semibold text-near-black">
              Meet the Team
            </h2>
            <p className="mt-4 text-lg text-text-gray max-w-2xl mx-auto">
              Our strength lies in our people—experienced professionals who bring diverse backgrounds and deep expertise to every engagement.
            </p>
          </div>

          {/* Leadership */}
          <div className="mb-12">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-text-gray mb-8 text-center">
              Leadership
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {leadership.map((member, index) => (
                <TeamMemberCard
                  key={index}
                  member={member}
                  onOpenBio={() => setSelectedMember(member)}
                />
              ))}
            </div>
          </div>

          {/* Team */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-text-gray mb-8 text-center">
              Advisory Team
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {team.map((member, index) => (
                <TeamMemberCard
                  key={index}
                  member={member}
                  onOpenBio={() => setSelectedMember(member)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bio Modal */}
      <BioModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </>
  );
}
