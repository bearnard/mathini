# Grade 12 IT, package 1: the 2024 amendment gaps and term moves (plan)

Source: `audit/it-2024-amendment-check.md`; the amendment's Grade 12 teaching plan. DBE Circular S9 of 2025: the amended CAPS applies to Grades 10 to 12 from January 2026.

## Sanity check against "5 to 7% of theory changed"
The share of NEW content in the amendment (against the original CAPS) is small and matches: AI, VR/AR/MR, SEO, GPU and disk caching, referential integrity, blockchain, 4IR/5IR in Grade 11. Most of my gap list is not new content: it is original-CAPS content our lessons never covered (cybercrime types, SSL, networks, caring for data) plus content that moved term. So the gap list is larger than 5 to 7% of the subject because it measures our lessons against the CAPS, not the amendment against the old CAPS.

## New lessons (7 x 14 questions = 98), additive, ids prefixed `gr12-`
| Id | Term (amendment) | Content |
|---|---|---|
| `gr12-ai-vr-ar-mr-t2` | T2 Software | AI (what, uses, advantages, disadvantages, limitations); VR, AR, MR (what, uses, hardware and software, advantages, limitations) |
| `gr12-computer-criminals-cybercrime-t2` | T2 Social | Hackers (threat actors), crackers (ethical hackers), cyber gangs, virus authors; types and effects of cybercrime; hardware, software, information, identity, bandwidth and time theft; scams; worms, malware, DoS, back doors; phishing; botnets and zombies; right to access vs privacy; safeguards |
| `gr12-network-parts-internet-access-t3` | T3 Networks | Switch, cables, wireless base station; router and modem; fibre, Wi-Fi, 4G/5G, satellite; all-in-one router; sharing files and folders, user rights, BitTorrent risks and benefits, online services (Dropbox, Google Workspace, Microsoft 365); remote access (local, Internet, VPN) |
| `gr12-e-communication-security-t3` | T3 E-communications | Strong passwords, encryption, multi-layer verification, blockchain, SSL with public and private keys, certificates, firewall |
| `gr12-seo-search-t3` | T3 Internet services | Semantic and mediated search, search engine optimisation (what it is, honest and dishonest methods), improving searching |
| `gr12-caring-for-data-big-data-t1` | T1 Data management and Social | Value of data and metadata; protecting data (validation, verification, integrity, logging who/what/when, warehousing, access control, parallel data sets); social implications of big data, warehousing and mining; mobile technology and privacy |
| `gr12-performance-gpu-caching-t1` | T1 Hardware | CPU speed and multi-processing, GPU, RAM and cache, storage type and speed with disk caching, network card speed; motivating a system for user requirements |

## Term moves (Wave B style, no content change, task ids kept, URLs are by title so no redirects)
GUI Design T1 to T2; Algorithmic Refinement T1 to T3; Classes in Delphi T1 to T2; Networks, Security and Systems Integration T1 to T3; Advanced Databases and SQL T2 to T1; Data Collection, Warehousing and Mining T3 to T1. A test pins each move and that no term is empty.

## Rules
Additive first: existing lessons and questions are not edited. Same lesson pattern as before (Slides + component, Rule/Worked/Mistake/Check, pictures with descriptions, 4 to 6 slides, 14 validator-clean questions each, key in all four positions), tested helper where a number appears, doubts added to `docs/notes/g12-it-doubts.md`, generated files regenerated, tsc, full tests, phone check, question-sync dry run, two screenshots.
