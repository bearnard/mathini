import { Map, Mountain, Landmark, Scroll } from 'lucide-react';

const heritageSites = [
    {
        title: "Provinces and Capital Cities",
        description: "Know the 9 provinces of South Africa and their capital cities.",
        icon: Map,
        details: [
            "Western Cape - Cape Town",
            "Eastern Cape - Bhisho",
            "Northern Cape - Kimberley",
            "Free State - Bloemfontein",
            "KwaZulu-Natal - Pietermaritzburg",
            "North West - Mahikeng",
            "Gauteng - Johannesburg",
            "Mpumalanga - Mbombela (Nelspruit)",
            "Limpopo - Polokwane"
        ]
    },
    {
        title: "The Cradle of Humankind",
        description: "A paleoanthropological site about 50 km northwest of Johannesburg.",
        icon: Landmark,
        details: [
            "Home to around 40% of the world's human ancestor fossils.",
            "Sterkfontein Caves are a major site here.",
            "Famous fossils: 'Mrs Ples' and 'Little Foot'."
        ]
    },
    {
        title: "Mapungubwe",
        description: "An ancient kingdom in the Limpopo Province.",
        icon: Landmark,
        details: [
            "Famous for the Golden Rhinoceros.",
            "The Order of Mapungubwe is a South African honour.",
            "Evidence of a complex society and trade network."
        ]
    },
    {
        title: "Frances Baard",
        description: "A South African trade unionist and anti-apartheid activist.",
        icon: Scroll,
        details: [
            "Born in Kimberley.",
            "Played a key role in the drafting of the Freedom Charter.",
            "A district municipality in the Northern Cape is named after her."
        ]
    },
    {
        title: "The Gariep Dam",
        description: "The largest dam in South Africa.",
        icon: Landmark,
        details: [
            "Located on the Orange River.",
            "Borders the Free State and Eastern Cape.",
            "Provides water for irrigation and generates hydro-electricity."
        ]
    },
    {
        title: "The Castle of Good Hope",
        description: "The oldest surviving colonial building in South Africa.",
        icon: Landmark,
        details: [
            "Located in Cape Town.",
            "Built by the Dutch East India Company (VOC).",
            "A pentagonal fortress."
        ]
    },
    {
        title: "Indigenous Medicine - The Aloe",
        description: "Traditional healing using local plants.",
        icon: Scroll,
        details: [
            "Aloe ferox (Bitter Aloe) is widely used.",
            "Used for skin ailments, burns, and as a laxative.",
            "An important part of South African heritage."
        ]
    },
    {
        title: "Kaditshwene",
        description: "An Iron Age stone-walled town.",
        icon: Landmark,
        details: [
            "Located in the North West province.",
            "Capital of the Bahurutshe people.",
            "One of the largest Tswana settlements in the early 19th century."
        ]
    },
    {
        title: "Makhonjwa Mountains",
        description: "Also known as the Barberton Greenstone Belt.",
        icon: Mountain,
        details: [
            "Located in Mpumalanga.",
            "Contains some of the oldest exposed rocks on Earth.",
            "A UNESCO World Heritage Site."
        ]
    },
    {
        title: "San Rock Art",
        description: "Ancient paintings by the San people.",
        icon: Mountain,
        details: [
            "Found in the Drakensberg mountains.",
            "Depicts spiritual beliefs and daily life.",
            "The eland is a frequently depicted animal."
        ]
    }
];

const HeritageTrail = () => {
    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-800 mb-2">A Heritage Trail Through South Africa</h1>
                    <p className="text-slate-500">Explore important historical and cultural sites.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {heritageSites.map((site, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-indigo-100 text-indigo-600 rounded-lg">
                                    <site.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-slate-800 mb-1">{site.title}</h3>
                                    <p className="text-slate-600 text-sm mb-3">{site.description}</p>
                                    <ul className="space-y-1">
                                        {site.details.map((detail, idx) => (
                                            <li key={idx} className="text-sm text-slate-500 flex items-start gap-2">
                                                <span className="mt-1.5 w-1.5 h-1.5 bg-indigo-400 rounded-full flex-shrink-0" />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeritageTrail;
