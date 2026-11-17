# Grade 11 IT: the 2024 amendment (plan, two branches)

Source: `audit/it-2024-amendment-check.md` section 3; amendment Grade 11 teaching plan (txt lines 531-860). The amended CAPS applies to Grade 11 from January 2026 (DBE Circular S9 of 2025).

## Branch A (Terms 1 and 2): 9 new lessons x 14 questions = 126, additive, ids prefixed `gr11-`
| Id | Term | Content (amendment) |
|---|---|---|
| `gr11-motherboard-memory-caching-t1` | T1 Hardware | Motherboard, BIOS, CPU, GPU, RAM, VRAM, ROM, slots, busses, expansion cards, modular design, data flow (storage > RAM > CPU, RAM > VRAM > GPU), cache, web and disk caching |
| `gr11-system-software-processing-t1` | T1 Software | Operating system types by cost, size, hardware and platform; compilers and interpreters; multi-tasking, multi-threading, multi-processing; virtual memory; virtualisation and virtual machines |
| `gr11-network-innovation-t1` | T1 Networks and Social | Media, star topology, limits, connection devices; PAN, HAN, LAN, WAN compared; VoIP; Internet, intranet, extranet; VPN; location-based computing and its social implications; acceptable use policy |
| `gr11-computer-management-threats-t1` | T1 Computer management | Human error and GIGO; physical threats; hardware failure; malware types (virus, worm, Trojan, ransomware, spyware, rootkit, keylogger, bot); social engineering (spoofing, phishing, pharming); remedies |
| `gr11-sorting-parallel-arrays-dates-t1` | T1 Solution development | Selection sort, parallel arrays, comparing sorts with trace tables, date and time functions (TimeToStr, DateToStr, IsLeapYear), string methods |
| `gr11-mobile-wireless-e-communication-t2` | T2 E-communications | Mobile and wireless e-communication, mobile app vs web, GPS, 4G/5G, Bluetooth, Wi-Fi, range and bandwidth, shaping and throttling, protocols' functions, blockchain, data security methods |
| `gr11-digitalisation-gig-economy-t2` | T2 Social | Gig economy, online services, video conferencing, social media and influencing, digital careers, workplace effects (remote work, automation, AI), protecting your online identity |
| `gr11-dbms-database-types-t2` | T2 Database management | What a DBMS is and does; proprietary and open-source examples; desktop, server and distributed databases; database careers |
| `gr11-user-defined-methods-t2` | T2 Solution development | Procedures and functions, purpose, signature and call, arguments vs parameters, value parameters, using methods in problems, input validation, tracing parameter passing |

Term moves in this branch (no content change): Computer Architecture T2 to T1, File Handling T1 to T2, Network Topologies T3 to T1, Protocols and Transmission Media T3 to T2.

## Branch B (Terms 3 and 4): 4 new lessons x 14 = 56 + moves + hides
| Id | Term | Content |
|---|---|---|
| `gr11-database-access-code-multi-form-t3` | T3 | Connect to a single-table database in code, navigate and modify a dataset, multi-form GUI, passing values, validating a solution with trace tables |
| `gr11-iot-4ir-big-data-t4` | T4 | IoT characteristics and uses, 4IR and 5IR, big data and the four Vs, uses, social implications |
| `gr11-streaming-compression-t4` | T4 | Download vs streaming, live broadcasts, lossless and lossy compression, quality vs bandwidth |
| `gr11-internet-services-websites-security-t4` | T4 | Static vs dynamic sites, location-based sites, HTTP and HTTPS, multi-factor authentication, OTP, tokens, Internet careers |

Moves: SQL Integration T2 to T3. Hides (only after the replacements are live, 308 to the closest lesson, code, task instructions and D1 questions kept): the two G11 OOP lessons (OOP is Grade 12 T2 in the amendment; Grade 12 has Classes in Delphi) and Databases and SQL / SQL Integration (SQL is Grade 12 T1; Grade 12 has Advanced Databases and SQL), keeping a G11 database-design lesson in T3 (existing Data Processing covers quality and validation). No term left empty.

## Rules
Additive first; ids and task instructions kept; same lesson pattern and quality gates as before; doubts added to a new `docs/notes/g11-it-doubts.md`; each branch: tsc, full tests, phone check, question-sync dry run, two screenshots.
