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
