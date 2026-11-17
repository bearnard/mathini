# Grade 10 Physical Sciences: doubts

## Term 1: pulses and superposition, electromagnetic radiation, matter and classification
- Pulses: the pictures use triangular pulses of half-width 2 units so that the sums can be checked by hand; real pulses are rounded. The amplitudes (2 cm, 3 cm, −2 cm) and the speeds (3,0 m in 0,60 s) are made up. CAPS gives no numbers.
- Superposition is stated as the addition of disturbances with signs. A pulse below the rest position has a negative amplitude, which is how the CAPS "constructive and destructive interference" examples are usually worked.
- EM radiation: c = 3,00 × 10⁸ m·s⁻¹ and h = 6,63 × 10⁻³⁴ J·s are the data-sheet values and are quoted in the questions that use them. The "typical wavelengths" in the spectrum picture (gamma 10⁻¹² m, X-rays 10⁻¹⁰ m, ultraviolet 10⁻⁸ m, visible 5 × 10⁻⁷ m, infrared 10⁻⁵ m, microwaves 10⁻² m, radio 10² m) are representative values, not the exact boundaries; the bands overlap in reality and the boundaries differ between textbooks. The lesson says "representative".
- Cellphones: CAPS asks learners to "discuss radiation from cell-phones". The lesson says that microwave photons carry far less energy than visible-light photons and that people continue to study health effects. It makes no safety claim either way. Please check the wording with the teacher.
- Photon energy is given to three figures; a violet photon (400 nm) carries about 4,97 × 10⁻¹⁹ J and a red photon (700 nm) about 2,84 × 10⁻¹⁹ J.
- Matter and classification: ionic formulae are derived from the ion charges by the lowest common multiple (NaCl, MgO, CaCl₂, Al₂O₃, Na₂S, Mg₃N₂), tested. Polyatomic ions (sulfate, nitrate, carbonate) are not included in this revision lesson. Brass is classed as a homogeneous mixture (an alloy).
- Not covered: the practical demonstrations (slinky and ripple tank) and the full list of EM spectrum boundaries.
- Fix included in this branch: the subtitle of the Grade 11 lesson "Energy and Chemical Change" showed the text "ΔH" instead of ΔH (a JSX attribute does not decode the escape). Fixed in `EnergyChemicalChange.tsx`; no other lesson has this problem (checked by grep).

## Term 2: magnetism
- The CAPS Grade 10 topic is permanent magnets, poles, attraction and repulsion, field lines, the Earth's field and the compass. Electromagnetism (the field of a current) is Grade 11 and is not taught here.
- The compass-needle picture uses the simple dipole model of a bar magnet: the needle directions and the weakening of the field with distance (about 1/r³) are computed and tested, but the figure of 1/r³ is not stated to learners; they are told only that the field gets "much weaker" far away.
- Earth's field: the lesson states that the Earth has a magnetic SOUTH pole near the geographic North Pole (so a compass needle's north end points north). This is the standard convention. The picture is a simplified bar-magnet model; it does not show the tilt of the magnetic axis, magnetic declination, or the movement of the magnetic poles.
- Magnetic materials: iron, cobalt and nickel (and steel) are attracted; copper, aluminium, gold, plastic and wood are not. Alloys vary (some stainless steels are not magnetic); the lesson says steel is attracted because it contains iron, which is true for ordinary steel.
- "Only repulsion proves that an object is a magnet" is the standard classroom test.
- Not covered: the practical activity of plotting field lines with iron filings or a compass.

## Terms 3 and 4: ions in solution, precipitation and reaction types, hydrosphere
- CAPS Grade 10 puts "reactions in aqueous solution" in term 3 and the hydrosphere in term 4. The existing lesson `gr10-chemical-change-stoichiometry-t3` is kept (additive); the new lessons cover the CAPS content it does not: ions in solution, precipitation, the four reaction types.
- Solubility rules are the common Grade 10 set: all nitrates and all Group 1 and ammonium salts soluble; chlorides, bromides and iodides soluble except silver and lead; sulfates soluble except barium and lead; carbonates and hydroxides insoluble except Group 1 and ammonium. Real solubility has more exceptions (for example calcium sulfate is only slightly soluble); the lesson says "simple rules".
- Anion tests: AgCl white, AgBr cream, AgI yellow (colours vary with conditions). The sulfate and carbonate tests use barium nitrate and nitric acid; carbonate dissolves with bubbles, sulfate does not. Sulfite and other anions are not covered.
- Redox is shown only by the change of charge (Zn 0 to +2, Cu²⁺ +2 to 0). Oxidation numbers, half-reactions and oxidising and reducing agents are not taught (CAPS does that in Grade 11/12).
- Hydrosphere shares are rounded reference values (oceans about 97%, ice about 2%, liquid fresh water about 1%). The exact figures differ slightly by source (groundwater is counted under liquid fresh water), so no more precise figures are given and no percentages for rivers, lakes or the atmosphere.
- The dam example (5 000 people, 200 L each per day, a 150 000 m³ dam) is an invented example to practise 1 000 L = 1 m³; it is labelled as an example and is not a real South African dam or town.
- Fix included: the shared lesson test `lessonTest.ts` flagged the text "NaN" inside "NaNO₃" (sodium nitrate) as a bad number. The check now matches the whole word NaN.
- Not covered: practical investigations (precipitation and anion tests in the laboratory, water quality sampling) and the detailed SA water-quality standards.

## Wave 2, term 1: the atom and isotopes, longitudinal waves, sound
- The atom: models are given in order (Dalton, Thomson, Rutherford, Bohr) with no dates. The gold-foil evidence is described in words (most pass through, a few deflected, very few bounce back). Quantum-mechanical orbitals are not taught at this level.
- Isotope abundances are rounded teaching values (chlorine 75% and 25%, boron 20% and 80%, magnesium 79%, 10% and 11%) chosen so that the weighted average matches the periodic-table value to one decimal place (35,5; 10,8; 24,3). Real abundances differ slightly. The lesson says "about". Radioactive decay and the uses of isotopes are not covered.
- Longitudinal waves: the spring picture is computed from a sine displacement of each coil (compressions at half a wavelength plus whole wavelengths, tested), a model rather than a photograph. Graphs of density against position are not drawn.
- Sound: the speed of sound in air is quoted as 340 m·s⁻¹ in every question that needs it (the real value depends on temperature, about 343 m·s⁻¹ at 20 °C). Speeds in water and steel are not given as numbers. The audible range is the usual 20 Hz to 20 000 Hz. The Doppler effect in the existing lesson is Grade 12 and stays on the Wave B list.
- Not covered: the practical activities (tuning forks, the spring and slinky) and the structure of the ear.

## Wave 2, term 2: particles substances are made of, physical and chemical change, electrostatics basics
- Particles: the three kinds of substance are shown with simple pictures (separate molecules, an ionic lattice, positive ions in a sea of electrons). Giant covalent substances (diamond, silica) are not covered, as the Grade 10 CAPS topic names molecules, ionic and metallic substances. The existing lesson on bonding keeps its Lewis structure and molecular shape section (Grade 11 content, on the Wave B list).
- Physical and chemical change: the energy change is qualitative (exothermic or endothermic, shown as two energy levels). Activation energy, bond energies and the sign of ΔH are Grade 11 and are not taught. The lesson says "breaking bonds takes in energy and forming bonds gives out energy", which is the usual Grade 10 statement.
- Conservation of mass uses whole-number relative atomic masses (H 1, C 12, N 14, O 16, Mg 24, S 32, K 39, Ca 40, Fe 56) and Cl 35,5, Cu 63,5 as in the periodic table of the data sheet; questions that need masses quote them.
- Electrostatics: charge is explained as a transfer of electrons only. The charge on an electron is e = 1,6 × 10⁻¹⁹ C, quoted in each question that uses it. Charge sharing by identical conducting spheres is used for conservation of charge. Coulomb's law and electric fields stay in the existing lesson (Grade 11, Wave B list); induction is described only as "the charges in the neutral object shift slightly".
- Not covered: the practical activities (charging by friction with a ruler and cloth, testing conductors) and the electroscope.
