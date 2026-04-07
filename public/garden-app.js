// ═══════════════════════════════════════════════════
// SEED DATA — 41 plants, static reference info
// ═══════════════════════════════════════════════════
const SEED = [
  // ── FRONT GARDEN ────────────────────────────────
  { id:'fg-coconut', commonName:'Coconut Palm', scientificName:'Cocos nucifera',
    location:'Front Garden', emoji:'🌴', category:'Tropical Tree', edible:true,
    sunlight:'Full Sun (8+ hrs)', watering:'Weekly deep watering', waterFreq:'weekly',
    fertilizer:'NPK 8-4-12 or palm fertilizer', fertFreq:'Monthly',
    soil:'Sandy loam, well-draining', floweringSeason:'Year-round',
    recs:['Water deeply at root zone (aim 60 cm depth) — surface watering is insufficient for palms','Apply potassium-rich fertilizer (sulfate of potash) monthly for better fruit quality','Remove dead/brown fronds to prevent Red Palm Weevil harborage','🚨 Inspect trunk base weekly for Red Palm Weevil — look for sawdust-like frass or entry holes','Mulch 60 cm radius around base to conserve moisture in dry season'],
    tasks:[{t:'Deep water at root base',p:'high'},{t:'Inspect trunk for pest entry holes (weevil)',p:'high'},{t:'Remove dead fronds if present',p:'medium'}],
    seasonNote:'March heat is peaking — consider twice-weekly watering if temps exceed 35°C. Apply potassium fertilizer before monsoon.' },

  { id:'fg-thunbergia', commonName:'Mysore Trumpetvine', scientificName:'Thunbergia mysorensis',
    location:'Front Garden', emoji:'🌺', category:'Climbing Vine', edible:false,
    sunlight:'Full Sun to Partial Shade', watering:'Every 2–3 days', waterFreq:'every 2-3 days',
    fertilizer:'Balanced NPK 10-10-10', fertFreq:'Every 3 weeks',
    soil:'Rich loamy, well-draining', floweringSeason:'Nov–Mar (peak)',
    recs:['Provide a sturdy trellis/pergola — vine can grow 6–8 m and becomes heavy','Prune lightly after flowering to encourage new lateral shoots','Fertilize every 3 weeks during growth; reduce in summer','Water regularly but avoid waterlogging','Bloom season winding down — rest phase and light pruning coming'],
    tasks:[{t:'Water well, ensure drainage',p:'medium'},{t:'Tie loose stems to trellis',p:'medium'},{t:'Deadhead spent flower clusters',p:'low'}],
    seasonNote:'Flowering season winding down. Do light pruning now and reduce fertilizer. Will rest through summer and re-bloom next cool season.' },

  { id:'fg-betel', commonName:'Betel Leaf', scientificName:'Piper betle',
    location:'Front Garden', emoji:'🍃', category:'Climber / Herb', edible:true,
    sunlight:'Partial Shade (3–4 hrs filtered)', watering:'Every 1–2 days', waterFreq:'every 1-2 days',
    fertilizer:'Compost + small dose NPK monthly', fertFreq:'Monthly',
    soil:'Rich, humus-heavy, well-draining', floweringSeason:'N/A',
    recs:['Keep consistently moist — do not let soil dry out','Protect from direct afternoon sun; intense heat scorches leaves','Harvest outer mature leaves regularly to encourage fresh growth','Apply organic compost every 6 weeks for soil richness','March: Watch for leaf yellowing from heat stress — increase shade and watering'],
    tasks:[{t:'Water at base — check soil moisture first',p:'high'},{t:'Harvest mature outer leaves',p:'medium'},{t:'Check for leaf curl/yellowing (heat stress)',p:'medium'}],
    seasonNote:'Heat stress risk is high. Ensure shade coverage and increase watering to daily if soil dries within 24 hrs.' },

  { id:'fg-lemon', commonName:'Lemon Tree', scientificName:'Citrus limon',
    location:'Front Garden', emoji:'🍋', category:'Fruit Tree', edible:true,
    sunlight:'Full Sun (6+ hrs)', watering:'Every 3–4 days', waterFreq:'every 3-4 days',
    fertilizer:'Citrus fertilizer (NPK 12-6-6) + micronutrients', fertFreq:'Every 6 weeks',
    soil:'Well-draining, slightly acidic (pH 6.0–6.5)', floweringSeason:'Feb–Mar, Oct–Nov',
    recs:['Deep water every 3–4 days; allow top 2 cm to dry between waterings','Apply citrus-specific fertilizer with iron and zinc — prevents yellowing','Check for and control scale insects and aphids on new growth','Mulch around base to retain moisture and regulate soil temperature','March: flowers may be setting — avoid stress watering during flowering'],
    tasks:[{t:'Check soil moisture before watering',p:'high'},{t:'Inspect leaves for scale/aphids',p:'medium'},{t:'Fertilize with citrus mix',p:'medium'}],
    seasonNote:'Lemon trees are in active growth. Fertilize now and maintain consistent watering. Watch for fruit set after flowering.' },

  { id:'fg-pomegranate', commonName:'Pomegranate', scientificName:'Punica granatum',
    location:'Front Garden', emoji:'🍎', category:'Fruit Shrub', edible:true,
    sunlight:'Full Sun (6+ hrs)', watering:'Every 4–5 days', waterFreq:'every 4-5 days',
    fertilizer:'NPK 8-8-8 or similar balanced', fertFreq:'Every 6–8 weeks',
    soil:'Well-draining, tolerates poor soil', floweringSeason:'Mar–May',
    recs:['Drought-tolerant once established — avoid overwatering (causes fruit splitting)','Flowers appear in March–May; avoid heavy pruning now','Apply balanced fertilizer before flowering season','Remove suckers at base regularly to maintain tree shape','March: flower buds forming — critical stage, do not stress the plant'],
    tasks:[{t:'Check soil — water only if dry 5 cm deep',p:'medium'},{t:'Remove suckers at base',p:'medium'},{t:'Watch for new flower bud formation',p:'low'}],
    seasonNote:'Flowering season starting. Reduce watering slightly to encourage fruit set. Apply potassium fertilizer to support flowering.' },

  { id:'fg-palash', commonName:'Flame of the Forest', scientificName:'Butea monosperma',
    location:'Front Garden', emoji:'🌳', category:'Deciduous Tree', edible:false,
    sunlight:'Full Sun', watering:'Minimal (drought-tolerant)', waterFreq:'every 2 weeks',
    fertilizer:'Minimal — natural compost once a year', fertFreq:'Annually',
    soil:'Any well-draining soil, sandy loam', floweringSeason:'Feb–Mar (peak bloom)',
    recs:['Extremely drought-tolerant — water only in prolonged dry spells','Do not over-fertilize; minimal annual compost is sufficient','Collect fallen flowers for composting — high in organic matter','Allow leaf litter to decompose naturally as mulch around base','March: tree is in peak bloom — enjoy and collect flowers for garden use'],
    tasks:[{t:'Collect fallen flowers for composting',p:'low'},{t:'No watering needed unless extreme drought',p:'low'}],
    seasonNote:'Peak flowering season. The tree is leafless but stunning in bloom. No intervention needed — just enjoy and collect fallen flowers.' },

  { id:'fg-banana', commonName:'Banana', scientificName:'Musa sp.',
    location:'Front Garden', emoji:'🍌', category:'Tropical Fruit', edible:true,
    sunlight:'Full Sun (6+ hrs)', watering:'Every 2–3 days', waterFreq:'every 2-3 days',
    fertilizer:'High potassium fertilizer + compost', fertFreq:'Monthly',
    soil:'Rich, well-draining, slightly acidic', floweringSeason:'Year-round (staggered)',
    recs:['Water deeply and frequently — banana is a heavy feeder','Apply compost and potassium-rich fertilizer monthly for fruit quality','Remove dead/drying outer leaves (pseudostem sheaths) regularly','March: apply extra potassium to support fruit development','Prop up heavy fruiting stems to prevent snapping'],
    tasks:[{t:'Water deeply at pseudostem base',p:'high'},{t:'Remove dead outer leaves',p:'medium'},{t:'Check for fruit development',p:'medium'},{t:'Apply potassium fertilizer',p:'medium'}],
    seasonNote:'March is ideal for fertilizing. Apply compost around the clump. If fruiting, increase watering and support the bunch.' },

  // ── LIVING ROOM GARDEN ──────────────────────────
  { id:'lr-monstera', commonName:'Monstera', scientificName:'Monstera deliciosa',
    location:'Living Room Garden', emoji:'🌿', category:'Tropical Foliage', edible:false,
    sunlight:'Bright Indirect (no direct sun)', watering:'Every 7–10 days', waterFreq:'every 7-10 days',
    fertilizer:'Balanced liquid fertilizer (10-10-10)', fertFreq:'Monthly (growing season)',
    soil:'Well-draining aroid mix (perlite + bark + peat)', floweringSeason:'N/A',
    recs:['Allow top 3–4 cm of soil to dry between waterings — root rot is the #1 killer','Wipe leaves monthly to remove dust and improve photosynthesis','Provide a moss pole or coir totem for aerial roots','Fertilize monthly during March–October; skip Nov–Feb','Check for spider mites — look for fine webbing on undersides of leaves'],
    tasks:[{t:'Check soil moisture before watering',p:'medium'},{t:'Wipe large leaves with damp cloth',p:'low'},{t:'Inspect undersides for spider mites',p:'low'}],
    seasonNote:'Growing season beginning. Resume monthly fertilizing. Watch for new leaf unfurling — a sign of healthy growth.' },

  { id:'lr-china-doll', commonName:'China Doll', scientificName:'Radermachera sinica',
    location:'Living Room Garden', emoji:'🌱', category:'Indoor Foliage', edible:false,
    sunlight:'Bright Indirect Light (4–6 hrs)', watering:'Every 5–7 days', waterFreq:'every 5-7 days',
    fertilizer:'Diluted liquid fertilizer (half strength)', fertFreq:'Every 3–4 weeks',
    soil:'Well-draining potting mix', floweringSeason:'N/A',
    recs:['Very sensitive to overwatering — let top 2 cm dry between waterings','Hates being moved — find a good spot and leave it','Leaf drop is common from sudden temperature changes or drafts','March: resume fertilizing monthly with diluted balanced fertilizer','Prune leggy stems to maintain compact bushy shape'],
    tasks:[{t:'Check soil — water only if top 2 cm is dry',p:'medium'},{t:'Look for leaf drop or yellowing',p:'medium'},{t:'Keep away from AC drafts',p:'low'}],
    seasonNote:'Growing season starting. Resume light fertilizing. Check that the pot is not near any cold air conditioning vents.' },

  { id:'lr-peperomia', commonName:'Peperomia (mix)', scientificName:'Peperomia spp.',
    location:'Living Room Garden', emoji:'🪴', category:'Indoor Succulent-like', edible:false,
    sunlight:'Low to Medium Indirect Light', watering:'Every 10–14 days', waterFreq:'every 10-14 days',
    fertilizer:'Diluted liquid fertilizer (quarter strength)', fertFreq:'Every 6 weeks',
    soil:'Well-draining mix with perlite', floweringSeason:'N/A',
    recs:['Very drought-tolerant — less watering is always better than more','Do not mist; peperomia prefers low humidity','Propagate easily from leaf cuttings in spring','March is a good time to repot if root-bound','Rotate quarterly for even growth in indoor light'],
    tasks:[{t:'Check soil — water only if bone dry',p:'low'},{t:'Rotate pot for even light',p:'low'}],
    seasonNote:'Low-maintenance season. Check soil moisture every 10–14 days. Could repot if roots are escaping drainage holes.' },

  { id:'lr-syngonium', commonName:'Syngonium', scientificName:'Syngonium podophyllum',
    location:'Living Room Garden', emoji:'🌿', category:'Indoor Foliage', edible:false,
    sunlight:'Bright to Medium Indirect Light', watering:'Every 7–10 days', waterFreq:'every 7-10 days',
    fertilizer:'Balanced liquid fertilizer', fertFreq:'Monthly (Mar–Oct)',
    soil:'Well-draining potting mix', floweringSeason:'N/A',
    recs:['Keep consistently moist but never waterlogged','Provide a small stake or let it trail — both work well','Mildly toxic if ingested — keep away from pets','March: growing season begins, resume fertilizing','Trim back leggy vines to encourage bushier growth'],
    tasks:[{t:'Check moisture and water if top 2 cm dry',p:'medium'},{t:'Trim leggy vines',p:'low'}],
    seasonNote:'Growing season begins. Resume monthly fertilizing. Good time to propagate stem cuttings in water.' },

  { id:'lr-pothos', commonName:'Pothos / Money Plant', scientificName:'Epipremnum aureum',
    location:'Living Room Garden', emoji:'💚', category:'Indoor Trailing Vine', edible:false,
    sunlight:'Low to Bright Indirect (very adaptable)', watering:'Every 7–10 days', waterFreq:'every 7-10 days',
    fertilizer:'Balanced liquid fertilizer', fertFreq:'Every 4–6 weeks',
    soil:'Any standard potting mix', floweringSeason:'N/A',
    recs:['Extremely low-maintenance — tolerates low light and infrequent watering','Yellow leaves = overwatering; brown tips = underwatering or low humidity','Prune long vines to encourage bushiness and propagate in water easily','March: good time to trim and give monthly fertilizer dose','Can grow in water vases long-term as a decorative element'],
    tasks:[{t:'Check soil and water if dry',p:'low'},{t:'Trim and propagate long stems',p:'low'}],
    seasonNote:'Almost no care needed. Trim long vines and place cuttings in water for propagation. Add a light fertilizer dose.' },

  // ── FIRST FLOOR BALCONY ─────────────────────────
  { id:'ff-jasmine', commonName:'Jasmine', scientificName:'Jasminum sambac',
    location:'First Floor Balcony', emoji:'🌸', category:'Flowering Climber', edible:false,
    sunlight:'Full Sun to Partial Shade (4+ hrs)', watering:'Every 2–3 days', waterFreq:'every 2-3 days',
    fertilizer:'Phosphorus-rich fertilizer (e.g. 5-10-5)', fertFreq:'Every 3 weeks (bloom season)',
    soil:'Well-draining loamy mix', floweringSeason:'Year-round, peak Apr–Oct',
    recs:['Water at base — avoid wetting flowers and foliage (promotes fungal issues)','Apply phosphorus-rich fertilizer every 3 weeks to encourage continuous blooming','Deadhead spent flowers regularly to promote new buds','Provide trellis or mesh for climbing — jasmine vines heavily','March: pre-monsoon pruning window — remove weak/dead stems now'],
    tasks:[{t:'Water at base in morning',p:'high'},{t:'Deadhead spent blooms',p:'medium'},{t:'Apply phosphorus fertilizer',p:'medium'},{t:'Tie new shoots to trellis',p:'low'}],
    seasonNote:'Entering peak bloom season. Fertilize with phosphorus every 3 weeks. Deadhead aggressively for more flowers.' },

  { id:'ff-hibiscus', commonName:'Hibiscus', scientificName:'Hibiscus rosa-sinensis',
    location:'First Floor Balcony', emoji:'🌺', category:'Flowering Shrub', edible:false,
    sunlight:'Full Sun (5+ hrs)', watering:'Every 2–3 days', waterFreq:'every 2-3 days',
    fertilizer:'Potassium-rich fertilizer (e.g. 12-4-18)', fertFreq:'Every 3 weeks',
    soil:'Rich, well-draining loamy mix', floweringSeason:'Year-round',
    recs:['Water regularly — hibiscus wilts quickly in dry heat','Apply high-potassium fertilizer every 3 weeks for continuous blooming','Prune lightly after each bloom flush to encourage new growth','Check for aphids and mealybugs on flower buds','March: fertilize and remove any dead wood from winter growth'],
    tasks:[{t:'Water well — check soil daily in heat',p:'high'},{t:'Check flower buds for aphids',p:'medium'},{t:'Remove spent flowers',p:'medium'}],
    seasonNote:'Blooming heavily. Fertilize with potassium-rich feed. Increase watering frequency as temperatures rise above 35°C.' },

  { id:'ff-ixora', commonName:'Ixora', scientificName:'Ixora coccinea',
    location:'First Floor Balcony', emoji:'🌼', category:'Flowering Shrub', edible:false,
    sunlight:'Full Sun to Partial Shade (4–6 hrs)', watering:'Every 2–3 days', waterFreq:'every 2-3 days',
    fertilizer:'Acidic fertilizer (azalea/camellia type)', fertFreq:'Every 4 weeks',
    soil:'Acidic, well-draining mix (pH 5.0–6.0)', floweringSeason:'Year-round',
    recs:['Ixora prefers acidic soil — use acidic fertilizer; avoid alkaline water','Keep consistently moist but not waterlogged','Prune lightly after flowering to maintain compact shape','March: good time to apply acidic fertilizer and check for iron deficiency (yellow leaves)','Protect from harsh afternoon sun in summer'],
    tasks:[{t:'Water consistently',p:'medium'},{t:'Apply acidic fertilizer',p:'medium'},{t:'Check for yellowing leaves (iron deficiency)',p:'medium'}],
    seasonNote:'Growing season. Apply acidic fertilizer this month. Yellow leaves indicate iron chlorosis — treat with iron chelate.' },

  { id:'ff-bougainvillea', commonName:'Bougainvillea', scientificName:'Bougainvillea spectabilis',
    location:'First Floor Balcony', emoji:'🌸', category:'Climbing Shrub', edible:false,
    sunlight:'Full Sun (6+ hrs)', watering:'Every 4–5 days (drought-tolerant)', waterFreq:'every 4-5 days',
    fertilizer:'Potassium-rich (12-4-18) or Bougainvillea special', fertFreq:'Every 4 weeks',
    soil:'Well-draining, slightly dry between waterings', floweringSeason:'Nov–Mar, Aug–Sep',
    recs:['Drought-stress slightly to trigger blooming — do not overwater','Apply potassium fertilizer every 4 weeks to sustain blooms','Do NOT prune during flowering — wait until blooms finish','Full sun is essential — shade reduces blooming dramatically','March: currently in peak bloom — let it flower, reduce watering slightly'],
    tasks:[{t:'Water only when soil is dry 3–4 cm deep',p:'medium'},{t:'Do NOT prune during bloom period',p:'high'},{t:'Apply potassium fertilizer',p:'medium'}],
    seasonNote:'Peak bloom season — do not prune now! Reduce watering to encourage more flower bracts. Enjoy the display.' },

  { id:'ff-adenium', commonName:'Desert Rose', scientificName:'Adenium obesum',
    location:'First Floor Balcony', emoji:'🌸', category:'Succulent Shrub', edible:false,
    sunlight:'Full Sun (6+ hrs)', watering:'Every 5–7 days', waterFreq:'every 5-7 days',
    fertilizer:'Phosphorus-rich fertilizer (5-15-5)', fertFreq:'Every 3–4 weeks',
    soil:'Very fast-draining cactus mix + perlite', floweringSeason:'Mar–Jun, Sep–Nov',
    recs:['Excellent drainage is critical — never let water stand in saucer','Water thoroughly then allow to dry completely before next watering','March–May is peak blooming season — apply phosphorus fertilizer','Do not repot during blooming — wait until after flowers finish','Inspect for mealybugs at base of caudex and in flower crevices'],
    tasks:[{t:'Water and allow full drying before next water',p:'medium'},{t:'Apply phosphorus fertilizer',p:'high'},{t:'Check caudex base for mealybugs',p:'medium'}],
    seasonNote:'Peak blooming season starts now. Apply phosphorus fertilizer to maximize flower production. Ensure excellent drainage.' },

  { id:'ff-croton', commonName:'Croton', scientificName:'Codiaeum variegatum',
    location:'First Floor Balcony', emoji:'🍁', category:'Ornamental Foliage', edible:false,
    sunlight:'Full Sun to Bright Indirect (4+ hrs)', watering:'Every 3–4 days', waterFreq:'every 3-4 days',
    fertilizer:'Balanced NPK 10-10-10', fertFreq:'Monthly',
    soil:'Rich, well-draining potting mix', floweringSeason:'N/A',
    recs:['More sun = more vivid leaf colors','Consistent watering is important — do not let it dry out completely','Mist leaves occasionally to maintain humidity on dry days','Hates being moved — find its best spot and leave it','March: resume monthly fertilizing for vibrant summer color'],
    tasks:[{t:'Check soil and water if top 2 cm is dry',p:'medium'},{t:'Apply monthly fertilizer',p:'medium'},{t:'Wipe leaves for dust',p:'low'}],
    seasonNote:'Good growing conditions. Full sun brings out the best leaf colors. Fertilize monthly through the growing season.' },

  { id:'ff-anthurium', commonName:'Anthurium', scientificName:'Anthurium andraeanum',
    location:'First Floor Balcony', emoji:'❤️', category:'Flowering Tropical', edible:false,
    sunlight:'Bright Indirect (no direct sun)', watering:'Every 5–7 days', waterFreq:'every 5-7 days',
    fertilizer:'High phosphorus liquid fertilizer', fertFreq:'Every 4–6 weeks',
    soil:'Chunky aroid mix (bark + perlite + peat)', floweringSeason:'Year-round',
    recs:['Never expose to direct sun — leaves and spathes will scorch','Water when top 3–4 cm of soil is dry; drainage is critical','High humidity helps — place near water tray with pebbles','March: fertilize with phosphorus for more blooms','Wipe leaves to keep them shiny and photosynthesis-efficient'],
    tasks:[{t:'Check soil moisture — water if dry 3+ cm',p:'medium'},{t:'Apply phosphorus fertilizer',p:'medium'},{t:'Mist around plant for humidity',p:'low'}],
    seasonNote:'Blooming season continues. Fertilize with a phosphorus-rich feed. Avoid any direct sun as temperatures increase.' },

  // ── TERRACE BALCONY ─────────────────────────────
  { id:'tb-waterlily', commonName:'Water Lily', scientificName:'Nymphaea sp.',
    location:'Terrace Balcony', emoji:'🪷', category:'Aquatic Plant', edible:false,
    sunlight:'Full Sun (6+ hrs)', watering:'Keep container full (aquatic)', waterFreq:'daily top-up',
    fertilizer:'Aquatic slow-release tablet fertilizer', fertFreq:'Every 4–6 weeks',
    soil:'Heavy clay soil in aquatic basket', floweringSeason:'Mar–Oct',
    recs:['Maintain water level — top up daily in hot weather to prevent evaporation','Apply aquatic fertilizer tablets directly into clay around roots every 4–6 weeks','Remove dead pads and spent flowers to prevent rot and algae','Full sun is essential — at least 6 hrs for blooming','March: growing season begins — add fertilizer tablets now for first flush of flowers'],
    tasks:[{t:'Top up container water level',p:'urgent'},{t:'Remove dead pads and spent blooms',p:'high'},{t:'Add fertilizer tablet if not done this month',p:'medium'}],
    seasonNote:'Growing season begins. Water levels need daily checking in March heat. Add aquatic fertilizer tablets now for first blooms.' },

  { id:'tb-lemongrass', commonName:'Lemongrass', scientificName:'Cymbopogon citratus',
    location:'Terrace Balcony', emoji:'🌾', category:'Culinary Herb', edible:true,
    sunlight:'Full Sun (4+ hrs)', watering:'Every 2–3 days', waterFreq:'every 2-3 days',
    fertilizer:'Nitrogen-rich fertilizer (e.g. 10-5-5)', fertFreq:'Monthly',
    soil:'Well-draining loamy mix', floweringSeason:'N/A',
    recs:['Divide large clumps every 1–2 years to maintain vigor — March/April is ideal','Harvest outer stalks regularly to encourage fresh growth','Apply nitrogen fertilizer monthly during growing season','Water consistently but avoid waterlogging','March: ideal time to divide and propagate; fertilize for lush summer growth'],
    tasks:[{t:'Harvest outer lemongrass stalks',p:'high'},{t:'Divide clumps if overcrowded',p:'medium'},{t:'Apply nitrogen fertilizer',p:'medium'}],
    seasonNote:'Ideal time to divide clumps before the monsoon. Fertilize with nitrogen for lush summer growth. Harvest regularly.' },

  { id:'tb-tulsi', commonName:'Holy Basil / Tulsi', scientificName:'Ocimum tenuiflorum',
    location:'Terrace Balcony', emoji:'🌿', category:'Sacred / Medicinal Herb', edible:true,
    sunlight:'Full Sun (4–6 hrs)', watering:'Every 1–2 days', waterFreq:'every 1-2 days',
    fertilizer:'Compost or diluted liquid fertilizer', fertFreq:'Every 3–4 weeks',
    soil:'Well-draining, fertile mix', floweringSeason:'Flowers if unpinched',
    recs:['Pinch off flower spikes regularly to keep plant bushy and aromatic','Water daily in summer heat — do not let soil dry out completely','Add fresh compost every 4–6 weeks for best fragrance','March: growing fast in heat — pinch flower buds as they form','Replace plant if it becomes very woody (every 1–2 years)'],
    tasks:[{t:'Water daily in summer heat',p:'high'},{t:'Pinch off flower spikes',p:'high'},{t:'Harvest leaves for use',p:'medium'}],
    seasonNote:'Growing vigorously. Pinch flower buds daily to keep plant leafy. Water every day in peak heat. Apply compost.' },

  { id:'tb-aloe', commonName:'Aloe Vera', scientificName:'Aloe barbadensis',
    location:'Terrace Balcony', emoji:'🌵', category:'Succulent / Medicinal', edible:true,
    sunlight:'Full Sun to Partial Shade', watering:'Every 10–14 days', waterFreq:'every 10-14 days',
    fertilizer:'Diluted cactus fertilizer (half strength)', fertFreq:'Every 2 months',
    soil:'Sandy, fast-draining cactus mix', floweringSeason:'Summer (occasional)',
    recs:['Water deeply then allow to fully dry — overwatering causes root rot','In full summer sun, watch for sunscorch (gray/white patches on leaves)','Separate and repot offset pups when they are 10+ cm tall','March: resume light watering after dry winter season','Apply diluted fertilizer once now for summer growth boost'],
    tasks:[{t:'Check soil — water only if completely dry',p:'low'},{t:'Separate any large pups',p:'low'}],
    seasonNote:'Low maintenance. Resume slightly more frequent watering as temps rise. Separate pups if clumping. Very resilient.' },

  { id:'tb-chilli', commonName:'Chilli Plant', scientificName:'Capsicum annuum',
    location:'Terrace Balcony', emoji:'🌶️', category:'Vegetable / Herb', edible:true,
    sunlight:'Full Sun (6+ hrs)', watering:'Every 2 days', waterFreq:'every 2 days',
    fertilizer:'Potassium + phosphorus feed during fruiting', fertFreq:'Every 2–3 weeks',
    soil:'Rich, well-draining, slightly acidic', floweringSeason:'Mar–Jun, Sep–Nov',
    recs:['Full sun is essential for heat and yield','Water consistently — stress during fruiting causes flower drop','Apply high-potassium feed when flowering begins','Harvest frequently to encourage continuous fruit production','March: flowers developing — apply phosphorus/potassium feed now'],
    tasks:[{t:'Water every 2 days in morning',p:'high'},{t:'Apply potassium fertilizer',p:'high'},{t:'Check for and remove aphids',p:'medium'},{t:'Harvest ripe chillies',p:'medium'}],
    seasonNote:'Flowering season begins. Fertilize with potassium now. Water consistently — irregular watering causes blossom drop.' },

  { id:'tb-curry-leaf', commonName:'Curry Leaf', scientificName:'Murraya koenigii',
    location:'Terrace Balcony', emoji:'🍃', category:'Culinary Herb Tree', edible:true,
    sunlight:'Full Sun (4+ hrs)', watering:'Every 2–3 days', waterFreq:'every 2-3 days',
    fertilizer:'Iron-rich fertilizer + compost', fertFreq:'Every 6 weeks',
    soil:'Well-draining, fertile loam', floweringSeason:'Spring–summer (coming)',
    recs:['Harvest curry leaves regularly — promotes fresh new growth','Yellowing leaves = iron or nitrogen deficiency — apply iron chelate or compost','Allow to go slightly root-bound in pot for more fragrant leaves','March is great time to fertilize — tree will flush new aromatic leaves soon','White flowers appear soon, followed by black berries — collect seeds for propagation'],
    tasks:[{t:'Harvest fresh curry leaves for cooking',p:'high'},{t:'Water every 2 days',p:'medium'},{t:'Apply iron fertilizer if leaves are yellowing',p:'medium'},{t:'Watch for new flower clusters forming',p:'low'}],
    seasonNote:'March is when curry leaf trees flush with fragrant new growth. Fertilize now for best aromatic yield.' },

  { id:'tb-methi', commonName:'Fenugreek / Methi', scientificName:'Trigonella foenum-graecum',
    location:'Terrace Balcony', emoji:'🌱', category:'Culinary Herb (Annual)', edible:true,
    sunlight:'Full Sun (4+ hrs)', watering:'Every 1–2 days', waterFreq:'every 1-2 days',
    fertilizer:'Compost tea or diluted liquid fertilizer', fertFreq:'Every 2 weeks',
    soil:'Loamy, well-draining', floweringSeason:'Feb–Mar',
    recs:['Harvest leaves regularly — outer leaves first — to extend productive life','Water daily in warm weather; do not let dry out','March: nearing end of season as heat builds — harvest heavily now','Collect seeds (fenugreek) from mature pods for kitchen use and re-sowing','Sow fresh batch after monsoon (Sep–Oct) for best winter crop'],
    tasks:[{t:'Harvest leaves aggressively before bolting',p:'urgent'},{t:'Water daily',p:'high'},{t:'Collect seeds from mature pods',p:'medium'}],
    seasonNote:'Season ending — harvest everything now before plants bolt in the heat. Collect seeds for sowing in September.' },

  { id:'tb-coriander', commonName:'Coriander / Dhania', scientificName:'Coriandrum sativum',
    location:'Terrace Balcony', emoji:'🌿', category:'Culinary Herb (Annual)', edible:true,
    sunlight:'Partial Shade to Full Sun (3–5 hrs)', watering:'Every 1–2 days', waterFreq:'every 1-2 days',
    fertilizer:'Diluted liquid nitrogen fertilizer', fertFreq:'Every 2 weeks',
    soil:'Well-draining, fertile mix', floweringSeason:'Mar–Apr (bolting)',
    recs:['March: coriander bolts (goes to flower) very quickly in heat — harvest now!','Water consistently — heat stress triggers premature bolting','Collect mature seeds for using as spice (coriander seeds) and next sowing','Re-sow in September when temperatures cool below 30°C','Sow densely and harvest young for best leaf flavor'],
    tasks:[{t:'Harvest all leaves immediately — bolting risk',p:'urgent'},{t:'Water daily',p:'high'},{t:'Collect seeds forming on mature plants',p:'medium'}],
    seasonNote:'Critical: harvest all coriander immediately before it bolts. Collect seeds for spice use and autumn re-sowing.' },

  { id:'tb-broccoli', commonName:'Broccoli', scientificName:'Brassica oleracea var. italica',
    location:'Terrace Balcony', emoji:'🥦', category:'Vegetable (Cool Season)', edible:true,
    sunlight:'Full Sun (6+ hrs)', watering:'Every 2 days', waterFreq:'every 2 days',
    fertilizer:'Nitrogen-rich fertilizer', fertFreq:'Every 2 weeks',
    soil:'Rich, well-draining, slightly alkaline', floweringSeason:'N/A',
    recs:['🚨 URGENT: March heat causes broccoli to bolt rapidly — harvest the head NOW if not done','Once the head is harvested, water and wait for lateral side shoots','After side shoots are harvested, plant is finished — compost it and use space for summer crops','Water consistently while harvesting side shoots','Learn from this season: sow next broccoli in October for December–February harvest'],
    tasks:[{t:'🚨 Harvest broccoli head immediately',p:'urgent'},{t:'Water consistently for side shoot development',p:'high'}],
    seasonNote:'Season is over — harvest the main head immediately if still present. Collect side shoots. Plan summer replacement.' },

  // ── TERRACE ─────────────────────────────────────
  { id:'tr-longan', commonName:'Longan', scientificName:'Dimocarpus longan',
    location:'Terrace', emoji:'🍇', category:'Tropical Fruit Tree', edible:true,
    sunlight:'Full Sun (6+ hrs)', watering:'Every 3–4 days', waterFreq:'every 3-4 days',
    fertilizer:'NPK 12-10-18 or fruit tree fertilizer', fertFreq:'Every 6 weeks',
    soil:'Well-draining, fertile loam, slightly acidic', floweringSeason:'Mar–Apr',
    recs:['Longan flowers in March–April — avoid stress watering during this critical period','Apply potassium-rich fertilizer before flowering to improve fruit set','Do not prune during flowering — wait until after harvest','March: trees may be showing flower spikes — monitor closely','Longan needs a temperature drop to trigger flowering — this may have already happened in winter'],
    tasks:[{t:'Water consistently at root zone',p:'high'},{t:'Check for flower spike emergence',p:'high'},{t:'Apply potassium fertilizer',p:'medium'}],
    seasonNote:'Flowering season. If flower spikes are visible, do NOT disturb the tree. Apply potassium fertilizer and maintain consistent watering.' },

  { id:'tr-mango', commonName:'Mango', scientificName:'Mangifera indica',
    location:'Terrace', emoji:'🥭', category:'Tropical Fruit Tree', edible:true,
    sunlight:'Full Sun (8+ hrs)', watering:'Every 5–7 days (reduce during flowering)', waterFreq:'every 5-7 days',
    fertilizer:'Potassium + phosphorus blend', fertFreq:'Every 8 weeks',
    soil:'Deep, well-draining loam, slightly acidic', floweringSeason:'Jan–Mar',
    recs:['Reduce watering during and after flowering to concentrate sugars in fruit','Apply potassium now for better fruit quality and size','Do NOT prune during flowering or fruiting — wait until post-harvest','Watch for mango hopper (small insects on flower clusters) — spray neem oil if present','March: fruit may be setting now — increase support if heavy fruits develop'],
    tasks:[{t:'Water deeply but less frequently during fruit set',p:'medium'},{t:'Check flower clusters for mango hopper',p:'high'},{t:'Apply potassium fertilizer',p:'medium'}],
    seasonNote:'Fruit setting phase. Reduce watering, watch for hoppers, and apply potassium. Do not prune. Exciting season ahead!' },

  { id:'tr-fig', commonName:'Fig', scientificName:'Ficus carica',
    location:'Terrace', emoji:'🫐', category:'Fruit Tree', edible:true,
    sunlight:'Full Sun (6+ hrs)', watering:'Every 3–4 days', waterFreq:'every 3-4 days',
    fertilizer:'Balanced fertilizer low in nitrogen', fertFreq:'Every 6 weeks',
    soil:'Well-draining, slightly alkaline', floweringSeason:'N/A (fruit)',
    recs:['Water consistently — irregular watering causes fruit splitting and drop','Avoid high-nitrogen fertilizer — promotes leaves over fruit','March: new growth flushing after winter dormancy — light fertilize now','Figs in containers may need repotting every 2–3 years','Watch for fig rust (orange spots on leaves) in humid conditions'],
    tasks:[{t:'Water consistently every 3–4 days',p:'medium'},{t:'Apply low-nitrogen fertilizer',p:'medium'},{t:'Check leaves for rust spots',p:'low'}],
    seasonNote:'New growth emerging from winter dormancy. Fertilize lightly. Consistent watering from now determines fruit quality.' },

  { id:'tr-guava', commonName:'Guava', scientificName:'Psidium guajava',
    location:'Terrace', emoji:'🍏', category:'Tropical Fruit Tree', edible:true,
    sunlight:'Full Sun (6+ hrs)', watering:'Every 3–4 days', waterFreq:'every 3-4 days',
    fertilizer:'NPK 10-10-10 + micronutrients', fertFreq:'Every 6 weeks',
    soil:'Well-draining, slightly acidic', floweringSeason:'Mar–Apr, Aug–Sep',
    recs:['Water deeply and consistently during fruiting — irregular water causes skin cracking','Apply full NPK fertilizer every 6 weeks during growing season','March–April: flowering season — apply phosphorus for better fruit set','Prune after harvest (not now) to encourage next flush','Watch for fruit fly damage — use fruit fly traps near the tree'],
    tasks:[{t:'Water every 3–4 days',p:'medium'},{t:'Apply balanced fertilizer',p:'medium'},{t:'Set up fruit fly trap',p:'medium'},{t:'Check for flower buds',p:'low'}],
    seasonNote:'Flowering season begins. Apply phosphorus now for good fruit set. Set fruit fly traps to protect the coming crop.' },

  { id:'tr-papaya', commonName:'Papaya', scientificName:'Carica papaya',
    location:'Terrace', emoji:'🍈', category:'Tropical Fruit Tree', edible:true,
    sunlight:'Full Sun (6+ hrs)', watering:'Every 2–3 days', waterFreq:'every 2-3 days',
    fertilizer:'High potassium + nitrogen fertilizer', fertFreq:'Monthly',
    soil:'Well-draining, fertile, slightly acidic', floweringSeason:'Year-round',
    recs:['Water frequently — papaya is a heavy feeder and drinker','Apply potassium fertilizer monthly for consistent fruit quality','Check sex of plant — only female and hermaphrodite plants bear fruit','March: fruiting year-round — ensure consistent water and monthly fertilizing','Protect from strong winds — papaya has a weak trunk'],
    tasks:[{t:'Water every 2–3 days at base',p:'high'},{t:'Apply monthly fertilizer',p:'medium'},{t:'Check for fruit flies or caterpillars',p:'medium'}],
    seasonNote:'Year-round fruiting. March is good time to fertilize. Ensure wind protection if plants are tall. Water consistently.' },

  { id:'tr-dragon-fruit', commonName:'Dragon Fruit', scientificName:'Selenicereus undatus',
    location:'Terrace', emoji:'🐉', category:'Tropical Cactus Fruit', edible:true,
    sunlight:'Full Sun to Partial Shade (4–6 hrs)', watering:'Every 7–10 days', waterFreq:'every 7-10 days',
    fertilizer:'Low nitrogen, high potassium (e.g. 5-10-15)', fertFreq:'Every 6 weeks',
    soil:'Sandy, very fast-draining cactus mix', floweringSeason:'May–Oct (night blooming)',
    recs:['Dragon fruit is a cactus — excellent drainage and minimal watering are critical','Support growing arms on a sturdy trellis or post (can get very heavy)','Flowers bloom at night and must be hand-pollinated if no night insects','March: pre-flowering season — apply fertilizer now for good flower set in May–Jun','Avoid waterlogging at all costs — leads to stem rot quickly'],
    tasks:[{t:'Check soil — water only if bone dry',p:'medium'},{t:'Secure climbing arms to trellis',p:'medium'},{t:'Apply pre-season fertilizer',p:'medium'}],
    seasonNote:'Pre-flowering preparation. Apply fertilizer now. Check supports for climbing arms. Blooms expected May–June.' },

  { id:'tr-moringa', commonName:'Moringa / Drumstick', scientificName:'Moringa oleifera',
    location:'Terrace', emoji:'🌿', category:'Multipurpose Tree', edible:true,
    sunlight:'Full Sun (6+ hrs)', watering:'Every 5–7 days (drought-tolerant)', waterFreq:'every 5-7 days',
    fertilizer:'Compost or balanced NPK annually', fertFreq:'Every 3 months',
    soil:'Well-draining, sandy loam', floweringSeason:'Year-round in tropics',
    recs:['Extremely drought-tolerant once established — avoid overwatering','Harvest young leaves, pods, and flowers regularly to encourage new growth','Coppice (cut back hard) annually to maintain manageable height and promote leaf growth','March: good time to apply compost and harvest pods','Protect young plants from wind — trunks can be brittle'],
    tasks:[{t:'Harvest young leaves and tender pods',p:'high'},{t:'Water if dry for more than 7 days',p:'low'},{t:'Apply compost around base',p:'low'}],
    seasonNote:'Good harvest season. Collect leaves, flowers, and pods. Apply compost now. Consider coppicing if tree is too tall.' },

  { id:'tr-mulberry', commonName:'Mulberry', scientificName:'Morus sp.',
    location:'Terrace', emoji:'🫐', category:'Fruit Tree', edible:true,
    sunlight:'Full Sun (5+ hrs)', watering:'Every 3–4 days', waterFreq:'every 3-4 days',
    fertilizer:'Balanced NPK 10-10-10', fertFreq:'Every 6 weeks',
    soil:'Well-draining, loamy, slightly acidic', floweringSeason:'Feb–Mar (fruit)',
    recs:['March–April is peak fruiting season — harvest ripe berries daily','Water consistently during fruiting — berries become small if water-stressed','Prune hard after fruiting season (May) to control size and encourage next crop','Apply balanced fertilizer now to support fruit maturation','Watch for scale insects on branches and leaf miner caterpillars'],
    tasks:[{t:'Harvest ripe mulberries daily',p:'urgent'},{t:'Water consistently during fruit maturation',p:'high'},{t:'Check branches for scale insects',p:'medium'}],
    seasonNote:'Peak fruiting! Harvest daily before birds get them. Water well during fruit maturation. Prune hard after May harvest.' },

  { id:'tr-starfruit', commonName:'Star Fruit', scientificName:'Averrhoa carambola',
    location:'Terrace', emoji:'⭐', category:'Tropical Fruit Tree', edible:true,
    sunlight:'Full Sun to Partial Shade (4–6 hrs)', watering:'Every 3–4 days', waterFreq:'every 3-4 days',
    fertilizer:'Balanced NPK + micronutrients', fertFreq:'Every 6 weeks',
    soil:'Well-draining, slightly acidic loam', floweringSeason:'Multiple flushes year-round',
    recs:['Water consistently — irregular watering causes premature fruit drop','Apply fertilizer every 6 weeks during fruiting seasons','Star fruit trees fruit multiple times per year — note which flush is active','March: growing season; apply fertilizer and maintain consistent watering','Fruit turns yellow-gold when ripe — harvest before it becomes too soft'],
    tasks:[{t:'Water every 3–4 days',p:'medium'},{t:'Apply balanced fertilizer',p:'medium'},{t:'Check for ripe fruits to harvest',p:'medium'}],
    seasonNote:'Growing season. Fertilize and maintain consistent watering. Check for developing fruits from the last flowering flush.' },

  { id:'tr-soursop', commonName:'Soursop', scientificName:'Annona muricata',
    location:'Terrace', emoji:'🍃', category:'Tropical Fruit Tree', edible:true,
    sunlight:'Full Sun to Partial Shade (4–6 hrs)', watering:'Every 3–4 days', waterFreq:'every 3-4 days',
    fertilizer:'Balanced NPK with micronutrients', fertFreq:'Every 8 weeks',
    soil:'Rich, well-draining, slightly acidic', floweringSeason:'Year-round (tropical)',
    recs:['Water regularly — soursop is sensitive to drought stress','Apply fertilizer every 8 weeks during growing season','Fruits are ready when skin turns yellowish-green and slightly soft to touch','March: good growing conditions — apply fertilizer now','Watch for mealybugs at branch joints and on fruit'],
    tasks:[{t:'Water every 3–4 days',p:'medium'},{t:'Check for mealybugs at branch joints',p:'medium'},{t:'Apply fertilizer if not done this month',p:'medium'},{t:'Check fruit development',p:'low'}],
    seasonNote:'Good growing conditions. Fertilize this month. Inspect for mealybugs. Any developing fruits should be monitored closely.' },

  { id:'tr-avocado', commonName:'Avocado', scientificName:'Persea americana',
    location:'Terrace', emoji:'🥑', category:'Tropical Fruit Tree', edible:true,
    sunlight:'Full Sun (6+ hrs)', watering:'Every 3–4 days', waterFreq:'every 3-4 days',
    fertilizer:'Citrus/avocado fertilizer with zinc and iron', fertFreq:'Every 6 weeks',
    soil:'Well-draining, slightly acidic loam (pH 6.0–6.5)', floweringSeason:'Feb–Apr',
    recs:['Avocado does NOT tolerate waterlogging — drainage is critical','Apply zinc and iron micronutrients — deficiency is very common','March: flowering season — maintain consistent but not excessive watering','Avocado trees often produce but fail to set fruit without a pollination partner','Watch for tip burn from salt accumulation in soil — leach with extra water'],
    tasks:[{t:'Water consistently without waterlogging',p:'medium'},{t:'Check for flowering',p:'high'},{t:'Apply zinc + iron micronutrient feed',p:'medium'}],
    seasonNote:'Flowering season. Critical: maintain consistent watering but excellent drainage. Apply micronutrient fertilizer. Monitor fruit set.' },

  { id:'tr-jackfruit', commonName:'Jackfruit', scientificName:'Artocarpus heterophyllus',
    location:'Terrace', emoji:'🟡', category:'Tropical Fruit Tree', edible:true,
    sunlight:'Full Sun (6+ hrs)', watering:'Every 4–5 days', waterFreq:'every 4-5 days',
    fertilizer:'NPK 10-10-10 + compost', fertFreq:'Every 2–3 months',
    soil:'Deep, well-draining loam', floweringSeason:'Jan–Apr',
    recs:['Water deeply but infrequently — jackfruit is relatively drought-tolerant once established','Apply compost and balanced fertilizer every 2–3 months','March: fruits may be developing on trunk and branches — monitor for insects','Support developing large fruits with mesh bags or string','Watch for jackfruit borer and pink disease (pinkish stem growth)'],
    tasks:[{t:'Water deeply every 4–5 days',p:'medium'},{t:'Check trunk and lower branches for developing fruit',p:'medium'},{t:'Apply compost around base',p:'low'}],
    seasonNote:'Potential fruiting period. Check trunk carefully for developing fruits (jackfruit grows on trunk). Apply compost now.' },

  { id:'tr-custard-apple', commonName:'Custard Apple', scientificName:'Annona squamosa',
    location:'Terrace', emoji:'🍵', category:'Tropical Fruit Tree', edible:true,
    sunlight:'Full Sun (5+ hrs)', watering:'Every 4–5 days', waterFreq:'every 4-5 days',
    fertilizer:'Balanced NPK + compost', fertFreq:'Every 6–8 weeks',
    soil:'Well-draining, fertile loam', floweringSeason:'Mar–Jun',
    recs:['March is flowering season — hand-pollinate flowers for better fruit set','Water consistently during flowering — drought stress causes flower drop','Apply fertilizer before flowering season (now) for best results','Custard apple flowers are unusual — transfer pollen with a small brush','Harvest when skin turns pale green-yellow and slightly soft'],
    tasks:[{t:'Check for flower development',p:'high'},{t:'Hand-pollinate any open flowers',p:'high'},{t:'Water consistently during flowering',p:'high'},{t:'Apply fertilizer',p:'medium'}],
    seasonNote:'Flowering season begins. Hand-pollination is key for fruit set. Water consistently and fertilize now for maximum fruit production.' },

  { id:'tr-sapota', commonName:'Sapota / Chikoo', scientificName:'Manilkara zapota',
    location:'Terrace', emoji:'🟤', category:'Tropical Fruit Tree', edible:true,
    sunlight:'Full Sun (6+ hrs)', watering:'Every 4–5 days', waterFreq:'every 4-5 days',
    fertilizer:'NPK 10-10-10 + compost', fertFreq:'Every 6 weeks',
    soil:'Well-draining, fertile loam', floweringSeason:'Year-round (2 main flushes)',
    recs:['Water deeply and consistently — sapota is a heavy feeder','Apply fertilizer every 6 weeks for continuous fruiting','Fruits take 5–7 months from flower to harvest — patience required','March: maintain regular care — fruits from past flowering cycles developing','Harvest when skin is brownish and fruit gives slightly to pressure'],
    tasks:[{t:'Water deeply every 4–5 days',p:'medium'},{t:'Apply balanced fertilizer',p:'medium'},{t:'Check for maturing fruits to harvest',p:'medium'}],
    seasonNote:'Year-round bearing tree. March: maintain regular watering and fertilizing. Check for fruits ready to harvest.' },

  { id:'tr-neem', commonName:'Neem', scientificName:'Azadirachta indica',
    location:'Terrace', emoji:'🌿', category:'Medicinal / Utility Tree', edible:false,
    sunlight:'Full Sun (6+ hrs)', watering:'Every 7–10 days (drought-tolerant)', waterFreq:'every 7-10 days',
    fertilizer:'Minimal — compost once a year', fertFreq:'Annually',
    soil:'Well-draining, sandy loam (very adaptable)', floweringSeason:'Feb–Apr',
    recs:['Extremely drought-tolerant — minimal watering needed','Collect neem leaves for making natural pest spray (boil leaves)','March: flowering now — collect flowers and young fruits for medicinal use','Neem oil from seeds is a powerful garden pesticide — collect ripe seeds','Very low maintenance — mainly just collect what you need'],
    tasks:[{t:'Check for and collect mature seeds for neem oil',p:'medium'},{t:'Minimal watering only if very dry',p:'low'},{t:'Collect leaves for natural pest spray preparation',p:'low'}],
    seasonNote:'Flowering and early fruiting. Minimal care needed. Collect flowers and leaves for medicinal use. Harvest seeds for neem oil.' },

  { id:'tr-ashwagandha', commonName:'Ashwagandha', scientificName:'Withania somnifera',
    location:'Terrace', emoji:'🌾', category:'Medicinal Herb', edible:false,
    sunlight:'Full Sun (4+ hrs)', watering:'Every 5–7 days', waterFreq:'every 5-7 days',
    fertilizer:'Compost or diluted organic fertilizer', fertFreq:'Every 6 weeks',
    soil:'Well-draining, sandy loam', floweringSeason:'Oct–Dec (fruiting Feb–Apr)',
    recs:['Drought-tolerant — do not overwater, especially in summer','March–April: red berries forming — these contain the seeds','Harvest roots for medicinal use after plant is 6–8 months old (Oct–Nov planting)','Apply compost every 6 weeks but avoid nitrogen excess','Can grow in relatively poor soil — low-maintenance plant'],
    tasks:[{t:'Check soil — water only if dry 5+ cm deep',p:'low'},{t:'Monitor red berry development',p:'medium'},{t:'Collect ripe berries for seeds',p:'medium'}],
    seasonNote:'Berries forming now (Feb–Apr fruiting). Collect ripe red berries for seeds. Low water needs. Harvest roots in Oct–Nov.' },
];

// ═══════════════════════════════════════════════════
// CONFIG — from window.__G__ injected by Next.js layout
// ═══════════════════════════════════════════════════
const _cfg = window.__G__ || {};
const BAKED_HASH       = _cfg.passwordHash  || '';
const SUPABASE_URL     = _cfg.supabaseUrl   || '';
const SUPABASE_KEY     = _cfg.supabaseKey   || '';

// ═══════════════════════════════════════════════════
// AUTH — password gate + brute-force protection
// ═══════════════════════════════════════════════════
const AUTH_SESSION_KEY  = 'garden_auth_session';
const AUTH_ATTEMPTS_KEY = 'garden_auth_attempts';
const SESSION_DAYS = 30;
const MAX_ATTEMPTS = 5;
const LOCKOUT_MS   = 15 * 60 * 1000;

async function sha256(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,'0')).join('');
}
function isAuthRequired() { return !!BAKED_HASH; }
function checkAuthSession() {
  if (!isAuthRequired()) return true;
  try {
    const s = JSON.parse(localStorage.getItem(AUTH_SESSION_KEY));
    return s && s.ts && (Date.now() - s.ts) / 86400000 < SESSION_DAYS;
  } catch { return false; }
}
function setAuthSession()   { localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify({ ts: Date.now() })); }
function clearAuthSession() { localStorage.removeItem(AUTH_SESSION_KEY); }
function getAttempts() {
  try { return JSON.parse(localStorage.getItem(AUTH_ATTEMPTS_KEY)) || { count:0, lockedUntil:0 }; }
  catch { return { count:0, lockedUntil:0 }; }
}
function saveAttempts(a) { localStorage.setItem(AUTH_ATTEMPTS_KEY, JSON.stringify(a)); }
function recordFailedAttempt() {
  const a = getAttempts();
  a.count = (a.count || 0) + 1;
  if (a.count >= MAX_ATTEMPTS) { a.lockedUntil = Date.now() + LOCKOUT_MS; a.count = 0; }
  saveAttempts(a); return a;
}
function clearAttempts() { localStorage.removeItem(AUTH_ATTEMPTS_KEY); }

function renderLogin(msg = '') {
  const a = getAttempts();
  const locked = a.lockedUntil && Date.now() < a.lockedUntil;
  const left = MAX_ATTEMPTS - a.count;
  document.getElementById('app').innerHTML = `
    <div class="min-h-[70vh] flex items-center justify-center">
      <div class="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full mx-4">
        <div class="text-center mb-6">
          <div class="text-5xl mb-3">🌿</div>
          <h2 class="text-xl font-bold text-green-900">Amur Family Garden</h2>
          <p class="text-sm text-gray-500 mt-1">Enter the family password to continue</p>
        </div>
        ${locked ? `
          <div class="text-center text-red-600 text-sm mb-4">
            Too many attempts. Try again in <span id="lockout-cd">…</span>
          </div>` : `
          ${msg ? `<div class="text-red-500 text-sm text-center mb-4">${msg}</div>` : ''}
          ${a.count > 0 ? `<div class="text-amber-600 text-xs text-center mb-3">⚠️ ${left} attempt${left!==1?'s':''} remaining before 15-min lockout</div>` : ''}
          <form onsubmit="event.preventDefault(); doLogin();" class="space-y-4">
            <div class="relative">
              <input id="pwd-input" type="password" placeholder="Family password"
                class="w-full border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-300 pr-10">
              <button type="button" onclick="togglePwd()" class="absolute right-3 top-3 text-gray-400 text-xs">Show</button>
            </div>
            <button type="submit" class="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-xl transition-colors">
              Unlock Garden 🌱
            </button>
          </form>`}
      </div>
    </div>`;
  if (locked) {
    (function tick() {
      const el = document.getElementById('lockout-cd');
      if (!el) return;
      const rem = a.lockedUntil - Date.now();
      if (rem <= 0) { a.lockedUntil = 0; a.count = 0; saveAttempts(a); renderLogin(); return; }
      const m = Math.floor(rem/60000), s = Math.floor((rem%60000)/1000);
      el.textContent = `${m}:${String(s).padStart(2,'0')}`;
      setTimeout(tick, 1000);
    })();
  } else {
    const inp = document.getElementById('pwd-input');
    if (inp) inp.focus();
  }
}

function togglePwd() {
  const inp = document.getElementById('pwd-input');
  if (inp) inp.type = inp.type === 'password' ? 'text' : 'password';
}

async function doLogin() {
  const inp = document.getElementById('pwd-input');
  if (!inp || !inp.value) return;
  const a = getAttempts();
  if (a.lockedUntil && Date.now() < a.lockedUntil) return;
  const hash = await sha256(inp.value);
  if (hash === BAKED_HASH) {
    clearAttempts(); setAuthSession(); await startGarden();
  } else {
    inp.value = '';
    const updated = recordFailedAttempt();
    renderLogin(updated.lockedUntil && Date.now() < updated.lockedUntil ? '' : 'Incorrect password. Please try again.');
  }
}

function doLogout() { clearAuthSession(); renderLogin(); }

// ═══════════════════════════════════════════════════
// SUPABASE — storage client only (photos)
// ═══════════════════════════════════════════════════
let sb = null;
function initStorageClient() {
  if (!sb && SUPABASE_URL && SUPABASE_KEY) {
    sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  }
}

// ═══════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════
let plants = [];

// ═══════════════════════════════════════════════════
// API HELPERS
// ═══════════════════════════════════════════════════
async function apiFetch(path, opts = {}) {
  const res = await fetch(path, {
    headers: { 'Content-Type': 'application/json', ...(opts.headers || {}) },
    ...opts,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error ? `${data.error}${data.code ? ` [${data.code}]` : ''}` : `HTTP ${res.status}`);
  return data;
}

// ═══════════════════════════════════════════════════
// DATA LOADING
// ═══════════════════════════════════════════════════
async function loadData() {
  showLoading('Syncing garden data…');
  try {
    const { settings, careEvents, photos, userPlants } = await apiFetch('/api/data');
    const settingsMap = {};
    (settings || []).forEach(s => settingsMap[s.plant_id] = s);

    const logsMap = {};
    (careEvents || []).forEach(e => {
      if (!logsMap[e.plant_id]) logsMap[e.plant_id] = [];
      logsMap[e.plant_id].push({ date: e.event_date, type: e.event_type, note: e.note });
    });

    const photosMap = {};
    (photos || []).forEach(ph => {
      if (!photosMap[ph.plant_id]) photosMap[ph.plant_id] = [];
      photosMap[ph.plant_id].push({ id: ph.id, url: ph.public_url, storagePath: ph.storage_path, date: ph.photo_date });
    });

    // Build from SEED
    plants = SEED.map(seed => buildPlant(seed, settingsMap[seed.id] || {}, logsMap[seed.id] || [], photosMap[seed.id] || []));

    // Append user-added custom plants
    (userPlants || []).forEach(u => {
      const seed = {
        id: u.id, commonName: u.common_name, scientificName: u.scientific_name || '',
        location: u.location, emoji: u.emoji || '🌱', category: u.category || '',
        edible: u.edible || false, sunlight: u.sunlight || '', watering: u.watering || '',
        waterFreq: '', fertilizer: u.fertilizer || '', fertFreq: u.fert_freq || '',
        soil: u.soil || '', floweringSeason: '—', recs: [], tasks: [], seasonNote: '',
      };
      plants.push(buildPlant(seed, settingsMap[u.id] || {}, logsMap[u.id] || [], photosMap[u.id] || []));
    });

    hideLoading();
  } catch (err) {
    hideLoading();
    throw err;
  }
}

function buildPlant(seed, s, pLogs, pPhotos) {
  return {
    id:            seed.id,
    commonName:    seed.commonName,
    scientificName:seed.scientificName,
    location:      seed.location,
    emoji:         seed.emoji,
    category:      seed.category,
    edible:        seed.edible,
    floweringSeason: seed.floweringSeason,
    nickname:      s.nickname      || '',
    healthStatus:  s.health_status || 'good',
    age:           s.age           || '',
    datePlanted:   s.date_planted  || '',
    lastWatered:   s.last_watered  || '',
    lastFertilized:s.last_fertilized || '',
    sunlight:      s.sunlight      || seed.sunlight,
    watering:      s.watering      || seed.watering,
    waterFreq:     s.water_freq    || seed.waterFreq,
    fertilizer:    s.fertilizer    || seed.fertilizer,
    fertFreq:      s.fert_freq     || seed.fertFreq,
    soil:          s.soil          || seed.soil,
    recs:          s.recs          || seed.recs,
    tasks:         s.tasks         || seed.tasks,
    seasonNote:    s.season_note   || seed.seasonNote,
    notes:         s.notes         || '',
    careLog:       pLogs,
    photos:        pPhotos,
  };
}

// ═══════════════════════════════════════════════════
// DATA WRITING
// ═══════════════════════════════════════════════════
async function upsertSettings(plantId, fields) {
  // Map camelCase fields to snake_case for API
  const body = { plant_id: plantId };
  if ('nickname'       in fields) body.nickname        = fields.nickname;
  if ('healthStatus'   in fields) body.health_status   = fields.healthStatus;
  if ('age'            in fields) body.age              = fields.age;
  if ('datePlanted'    in fields) body.date_planted     = fields.datePlanted || null;
  if ('lastWatered'    in fields) body.last_watered     = fields.lastWatered || null;
  if ('lastFertilized' in fields) body.last_fertilized  = fields.lastFertilized || null;
  if ('sunlight'       in fields) body.sunlight         = fields.sunlight;
  if ('watering'       in fields) body.watering         = fields.watering;
  if ('fertilizer'     in fields) body.fertilizer       = fields.fertilizer;
  if ('fertFreq'       in fields) body.fert_freq        = fields.fertFreq;
  if ('soil'           in fields) body.soil             = fields.soil;
  if ('waterFreq'      in fields) body.water_freq       = fields.waterFreq;
  if ('recs'           in fields) body.recs             = fields.recs || null;
  if ('tasks'          in fields) body.tasks            = fields.tasks || null;
  if ('seasonNote'     in fields) body.season_note      = fields.seasonNote || null;
  if ('notes'          in fields) body.notes            = fields.notes;
  await apiFetch('/api/settings', { method: 'PUT', body: JSON.stringify(body) });
  // Update in-memory
  plants = plants.map(p => p.id === plantId ? { ...p, ...fields } : p);
}

async function insertCareEvent(plantId, type, note) {
  const dateStr = today();
  await apiFetch('/api/care-events', {
    method: 'POST',
    body: JSON.stringify({ plant_id: plantId, event_date: dateStr, event_type: type, note: note || '' }),
  });
  plants = plants.map(p => p.id === plantId
    ? { ...p, careLog: [...(p.careLog || []), { date: dateStr, type, note: note || '' }] }
    : p);
}

async function uploadPhoto(plantId, file) {
  initStorageClient();
  if (!sb) throw new Error('Supabase storage is not configured.');
  const ext = file.name.split('.').pop();
  const path = `${plantId}/${Date.now()}.${ext}`;
  const { data: upData, error: upErr } = await sb.storage.from('garden-photos').upload(path, file);
  if (upErr) throw upErr;
  const { data: { publicUrl } } = sb.storage.from('garden-photos').getPublicUrl(upData.path);
  const dateStr = today();
  const row = await apiFetch('/api/photos', {
    method: 'POST',
    body: JSON.stringify({ plant_id: plantId, storage_path: upData.path, public_url: publicUrl, photo_date: dateStr }),
  });
  plants = plants.map(p => p.id === plantId
    ? { ...p, photos: [...(p.photos || []), { id: row.id, url: publicUrl, storagePath: upData.path, date: dateStr }] }
    : p);
}

async function deletePhotoById(plantId, photoId, storagePath) {
  initStorageClient();
  if (sb) await sb.storage.from('garden-photos').remove([storagePath]);
  await apiFetch('/api/photos', { method: 'DELETE', body: JSON.stringify({ id: photoId }) });
  plants = plants.map(p => p.id === plantId
    ? { ...p, photos: (p.photos || []).filter(ph => ph.id !== photoId) }
    : p);
}

async function insertCustomPlant(data) {
  await apiFetch('/api/plants', { method: 'POST', body: JSON.stringify(data) });
}

// ═══════════════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════════════
const LOCATIONS = ['Front Garden','Living Room Garden','First Floor Balcony','Terrace Balcony','Terrace'];
const LOC_ICONS = { 'Front Garden':'🏡','Living Room Garden':'🛋️','First Floor Balcony':'🌤️','Terrace Balcony':'☀️','Terrace':'🌞' };

function groupByLocation(arr) {
  const map = {};
  LOCATIONS.forEach(l => map[l] = []);
  arr.forEach(p => { if (map[p.location]) map[p.location].push(p); else map[p.location] = [p]; });
  return map;
}
function healthBadge(s) {
  const cfg = { good:'badge-good',fair:'badge-fair',poor:'badge-poor' };
  const lbl = { good:'Healthy',fair:'Needs Attention',poor:'At Risk' };
  return `<span class="text-xs font-semibold px-2 py-0.5 rounded-full ${cfg[s]||'badge-fair'}">${lbl[s]||s}</span>`;
}
function priorityClass(p) { return { urgent:'priority-urgent',high:'priority-high',medium:'priority-medium',low:'priority-low' }[p]||'priority-low'; }
function priorityLabel(p) { return { urgent:'🚨 URGENT',high:'🔴 High',medium:'🟡 Medium',low:'🟢 Low' }[p]||p; }
function fmtDate(d) { if (!d) return '—'; try { return new Date(d+'T00:00:00').toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}); } catch { return d; } }
function today() { return new Date().toISOString().split('T')[0]; }
function escHtml(s) { return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function getPlant(id) { return plants.find(p => p.id === id); }
function showLoading(msg) {
  document.getElementById('loading-msg').textContent = msg || 'Loading…';
  const el = document.getElementById('loading-overlay');
  el.classList.remove('hidden'); el.classList.add('flex');
}
function hideLoading() {
  const el = document.getElementById('loading-overlay');
  el.classList.add('hidden'); el.classList.remove('flex');
}

// ═══════════════════════════════════════════════════
// ROUTER
// ═══════════════════════════════════════════════════
function router() {
  const hash = location.hash || '#home';
  const app = document.getElementById('app');
  if (hash === '#home' || hash === '') app.innerHTML = renderHome();
  else if (hash === '#tasks')            app.innerHTML = renderTasks();
  else if (hash === '#add')             app.innerHTML = renderAdd();
  else if (hash === '#chat')            app.innerHTML = renderChat();
  else if (hash.startsWith('#plant/'))  app.innerHTML = renderPlant(hash.replace('#plant/',''));
  else if (hash.startsWith('#edit/'))   app.innerHTML = renderEdit(hash.replace('#edit/',''));
  else app.innerHTML = renderHome();
  window.scrollTo(0,0);
}

window.addEventListener('hashchange', router);

// ═══════════════════════════════════════════════════
// HOME VIEW
// ═══════════════════════════════════════════════════
function renderHome() {
  const groups = groupByLocation(plants);
  const total = plants.length;
  const healthy = plants.filter(p=>p.healthStatus==='good').length;
  const attention = plants.filter(p=>p.healthStatus==='fair').length;
  const atrisk = plants.filter(p=>p.healthStatus==='poor').length;

  const stats = `
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
    <div class="bg-white rounded-2xl p-4 shadow-sm border border-green-100 text-center">
      <div class="text-3xl font-bold text-green-700">${total}</div>
      <div class="text-sm text-gray-500 mt-1">Total Plants</div>
    </div>
    <div class="bg-white rounded-2xl p-4 shadow-sm border border-green-100 text-center">
      <div class="text-3xl font-bold text-green-600">${healthy}</div>
      <div class="text-sm text-gray-500 mt-1">Healthy</div>
    </div>
    <div class="bg-white rounded-2xl p-4 shadow-sm border border-yellow-100 text-center">
      <div class="text-3xl font-bold text-yellow-600">${attention}</div>
      <div class="text-sm text-gray-500 mt-1">Needs Attention</div>
    </div>
    <div class="bg-white rounded-2xl p-4 shadow-sm border border-red-100 text-center">
      <div class="text-3xl font-bold text-red-600">${atrisk}</div>
      <div class="text-sm text-gray-500 mt-1">At Risk</div>
    </div>
  </div>`;

  let locs = '';
  LOCATIONS.forEach(loc => {
    const ps = groups[loc];
    if (!ps || !ps.length) return;
    locs += `
    <div class="mb-8">
      <h2 class="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
        ${LOC_ICONS[loc]||'🌿'} ${loc}
        <span class="text-sm font-normal text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">${ps.length}</span>
      </h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        ${ps.map(plantCard).join('')}
      </div>
    </div>`;
  });

  return `
  <div>
    <div class="flex items-center justify-between mb-6">
      <div>
        <h1 class="text-2xl font-bold text-green-900">My Garden</h1>
        <p class="text-green-700 text-sm mt-0.5">${new Date().toLocaleDateString('en-IN',{weekday:'long',year:'numeric',month:'long',day:'numeric'})}</p>
      </div>
      <a href="#tasks" class="no-print bg-green-700 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-green-800 transition-colors">📋 Weekly Tasks</a>
    </div>
    ${stats}${locs}
  </div>`;
}

function plantCard(p) {
  const img = p.photos && p.photos.length
    ? `<img src="${p.photos[p.photos.length-1].url}" alt="" class="w-full h-28 object-cover rounded-t-xl">`
    : `<div class="w-full h-28 bg-gradient-to-br from-green-100 to-emerald-200 rounded-t-xl flex items-center justify-center text-4xl">${p.emoji}</div>`;
  return `
  <a href="#plant/${p.id}" class="plant-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden block">
    ${img}
    <div class="p-3">
      <div class="font-semibold text-gray-800 text-sm leading-tight">${escHtml(p.nickname||p.commonName)}</div>
      <div class="text-xs text-gray-400 mt-0.5 italic truncate">${escHtml(p.scientificName)}</div>
      <div class="mt-2">${healthBadge(p.healthStatus)}</div>
    </div>
  </a>`;
}

// ═══════════════════════════════════════════════════
// PLANT DETAIL VIEW
// ═══════════════════════════════════════════════════
function renderPlant(id) {
  const p = getPlant(id);
  if (!p) return `<div class="text-center py-20 text-gray-400">Plant not found. <a href="#home" class="text-green-600">Back to Garden</a></div>`;

  const hero = p.photos && p.photos.length
    ? `<img src="${p.photos[p.photos.length-1].url}" class="w-full h-64 object-cover rounded-2xl mb-6" alt="${escHtml(p.commonName)}">`
    : `<div class="w-full h-48 bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl mb-6 flex items-center justify-center text-7xl">${p.emoji}</div>`;

  const photosGrid = p.photos && p.photos.length
    ? `<div class="flex flex-wrap gap-2 mt-3">
        ${p.photos.map(ph => `
          <div class="relative group">
            <img src="${ph.url}" class="photo-thumb" onclick="openLightbox('${ph.url}')" title="${fmtDate(ph.date)}">
            <button onclick="delPhoto('${id}',${ph.id},'${ph.storagePath}')" class="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 text-xs hidden group-hover:flex items-center justify-center leading-none">×</button>
            <div class="text-xs text-gray-400 mt-0.5 text-center">${fmtDate(ph.date)}</div>
          </div>`).join('')}
      </div>`
    : `<p class="text-sm text-gray-400 mt-2">No photos yet — add the first one!</p>`;

  const recsHtml = (p.recs||[]).map(r => `
    <li class="flex gap-2 text-sm text-gray-700">
      <span class="text-green-500 mt-0.5 flex-shrink-0">✓</span><span>${r}</span>
    </li>`).join('');

  const tasksHtml = (p.tasks||[]).map(t => `
    <div class="flex items-start gap-3 py-2 px-3 rounded-lg bg-gray-50 ${priorityClass(t.p)}">
      <span class="text-xs font-semibold mt-0.5 whitespace-nowrap">${priorityLabel(t.p)}</span>
      <span class="text-sm text-gray-700">${t.t}</span>
    </div>`).join('');

  const logHtml = (p.careLog||[]).length
    ? `<div class="space-y-1 mt-2 max-h-48 overflow-y-auto">
        ${[...(p.careLog||[])].reverse().map(e => `
          <div class="text-sm flex gap-3 py-1.5 border-b border-gray-50 last:border-0">
            <span class="text-gray-400 whitespace-nowrap w-24 flex-shrink-0">${fmtDate(e.date)}</span>
            <span class="font-medium text-green-700">${escHtml(e.type)}</span>
            <span class="text-gray-500">${escHtml(e.note)}</span>
          </div>`).join('')}
      </div>`
    : `<p class="text-sm text-gray-400 mt-2">No care events logged yet.</p>`;

  return `
  <div class="max-w-3xl mx-auto">
    <div class="flex items-center justify-between mb-4">
      <a href="#home" class="text-green-600 text-sm hover:text-green-800">← Garden</a>
      <a href="#edit/${id}" class="bg-green-700 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-green-800">✏️ Edit</a>
    </div>
    ${hero}
    <div class="flex items-start justify-between mb-2 flex-wrap gap-2">
      <div>
        <h1 class="text-2xl font-bold text-green-900">${p.nickname ? `${escHtml(p.nickname)} <span class="text-lg font-normal text-gray-400">(${escHtml(p.commonName)})</span>` : escHtml(p.commonName)}</h1>
        <div class="text-gray-400 italic text-sm">${escHtml(p.scientificName)}</div>
      </div>
      <div class="flex items-center gap-2 flex-wrap">
        ${healthBadge(p.healthStatus)}
        <span class="text-xs text-gray-400">${LOC_ICONS[p.location]||''} ${p.location}</span>
      </div>
    </div>

    <div class="grid grid-cols-3 md:grid-cols-6 gap-3 my-5">
      ${chip('☀️','Sunlight',p.sunlight)}
      ${chip('💧','Watering',p.watering)}
      ${chip('🌱','Category',p.category)}
      ${chip('🌸','Flowering',p.floweringSeason||'—')}
      ${chip('🍽️','Edible',p.edible?'Yes':'No')}
      ${chip('🪴','Fertilizer',p.fertFreq)}
    </div>

    ${p.seasonNote ? `
    <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5 text-sm">
      <span class="font-semibold text-amber-800">📅 Seasonal Advice: </span>
      <span class="text-amber-700">${escHtml(p.seasonNote)}</span>
    </div>` : ''}

    <div class="grid md:grid-cols-2 gap-4 mb-5">
      <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <h3 class="font-semibold text-gray-800 mb-3">🌿 Care Details</h3>
        <table class="w-full text-sm">
          ${drow('Fertilizer', p.fertilizer)}
          ${drow('Fertilize every', p.fertFreq)}
          ${drow('Soil', p.soil)}
          ${drow('Age', p.age)}
          ${drow('Date Planted', fmtDate(p.datePlanted))}
          ${drow('Last Watered', fmtDate(p.lastWatered))}
          ${drow('Last Fertilized', fmtDate(p.lastFertilized))}
        </table>
        <div class="flex gap-2 mt-4 flex-wrap">
          <button onclick="doLogCare('${id}','Watered')" class="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-blue-200">💧 Log Watering</button>
          <button onclick="doLogCare('${id}','Fertilized')" class="bg-green-100 text-green-700 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-green-200">🌱 Log Fertilizing</button>
          <button onclick="doLogCare('${id}','Pruned')" class="bg-purple-100 text-purple-700 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-purple-200">✂️ Log Pruning</button>
        </div>
      </div>
      <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <h3 class="font-semibold text-gray-800 mb-3">📋 Gardener Tasks</h3>
        <div class="space-y-2">${tasksHtml||'<p class="text-sm text-gray-400">No specific tasks.</p>'}</div>
      </div>
    </div>

    <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-5">
      <h3 class="font-semibold text-gray-800 mb-3">💡 Care Recommendations</h3>
      <ul class="space-y-2">${recsHtml||'<li class="text-sm text-gray-400">Add recommendations in the edit view.</li>'}</ul>
    </div>

    <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-5">
      <h3 class="font-semibold text-gray-800 mb-2">📝 Notes</h3>
      <div class="text-sm text-gray-600 whitespace-pre-wrap min-h-8">${escHtml(p.notes)||'<span class="text-gray-400">No notes yet.</span>'}</div>
      <div class="mt-3 flex gap-2">
        <textarea id="new-note" rows="2" placeholder="Add a note or observation…" class="flex-1 border border-gray-200 rounded-lg p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-300"></textarea>
        <button onclick="doAddNote('${id}')" class="bg-green-700 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-800">Save</button>
      </div>
    </div>

    <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-5">
      <div class="flex items-center justify-between mb-1">
        <h3 class="font-semibold text-gray-800">📷 Photo History</h3>
        <label for="photo-input-${id}" class="cursor-pointer bg-green-100 text-green-700 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-green-200">+ Add Photo</label>
        <input type="file" id="photo-input-${id}" accept="image/*" onchange="doUploadPhoto(this,'${id}')">
      </div>
      <div id="photo-upload-msg-${id}" class="text-xs text-gray-400 mt-1"></div>
      ${photosGrid}
    </div>

    <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-5">
      <h3 class="font-semibold text-gray-800 mb-1">🗒️ Care Log</h3>
      ${logHtml}
    </div>

    <!-- AI Corrections (always shown — key is server-side now) -->
    <div class="bg-white rounded-2xl p-4 shadow-sm border border-green-100 mb-10">
      <h3 class="font-semibold text-gray-800 mb-1">🤖 AI Correction</h3>
      <p class="text-xs text-gray-400 mb-3">Describe what's wrong or different about this plant's care info — Claude will suggest updated content.</p>
      <textarea id="ai-correction-input" rows="3"
        placeholder="e.g. This plant is in the ground, not a pot. It gets afternoon shade from the east wall."
        class="w-full border border-gray-200 rounded-xl p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-300"></textarea>
      <div class="mt-2 flex items-center gap-3 flex-wrap">
        <button onclick="doAiCorrection('${id}')" id="ai-btn-${id}"
          class="bg-green-700 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-green-800 disabled:opacity-50">
          ✨ Suggest Updates
        </button>
        <span id="ai-status-${id}" class="text-xs text-red-500"></span>
      </div>
      <div id="ai-result-${id}" class="mt-4"></div>
    </div>
  </div>`;
}

function chip(icon, label, value) {
  return `<div class="bg-white rounded-xl p-3 shadow-sm border border-gray-100 text-center">
    <div class="text-lg">${icon}</div>
    <div class="text-xs text-gray-400 mt-0.5">${label}</div>
    <div class="text-xs font-semibold text-gray-700 mt-0.5 leading-tight">${escHtml(value||'—')}</div>
  </div>`;
}
function drow(label, value) {
  return `<tr class="border-b border-gray-50 last:border-0">
    <td class="py-1.5 pr-3 text-gray-400 text-xs w-32">${label}</td>
    <td class="py-1.5 text-gray-700 text-sm font-medium">${escHtml(value||'—')}</td>
  </tr>`;
}

// ═══════════════════════════════════════════════════
// AI CORRECTIONS
// ═══════════════════════════════════════════════════
const _pendingAiUpdates = {};

async function doAiCorrection(id) {
  const input = (document.getElementById('ai-correction-input') || {}).value?.trim();
  if (!input) return;
  const p = getPlant(id);
  const btn = document.getElementById(`ai-btn-${id}`);
  const status = document.getElementById(`ai-status-${id}`);
  const result = document.getElementById(`ai-result-${id}`);

  btn.disabled = true; btn.textContent = '⏳ Thinking…';
  status.textContent = ''; result.innerHTML = '';

  const summary = {
    commonName: p.commonName, scientificName: p.scientificName, location: p.location,
    sunlight: p.sunlight, watering: p.watering, waterFreq: p.waterFreq,
    fertilizer: p.fertilizer, fertFreq: p.fertFreq, soil: p.soil,
    recs: p.recs, tasks: p.tasks, seasonNote: p.seasonNote,
  };

  try {
    const data = await apiFetch('/api/ai/correct', {
      method: 'POST',
      body: JSON.stringify({ plant: summary, correction: input }),
    });
    _pendingAiUpdates[id] = data.updates;
    showAiResult(id, data.updates);
  } catch(err) {
    status.textContent = `Error: ${err.message}`;
  } finally {
    btn.disabled = false; btn.textContent = '✨ Suggest Updates';
  }
}

function showAiResult(id, updates) {
  const result = document.getElementById(`ai-result-${id}`);
  const keys = Object.keys(updates || {});
  if (!keys.length) { result.innerHTML = `<p class="text-sm text-gray-400 mt-2">No changes suggested.</p>`; return; }

  const labels = { recs:'Care Recommendations', tasks:'Gardener Tasks', seasonNote:'Seasonal Advice',
    sunlight:'Sunlight', watering:'Watering', waterFreq:'Water Frequency',
    fertilizer:'Fertilizer', fertFreq:'Fertilize Every', soil:'Soil' };

  let rows = keys.map(k => {
    const v = updates[k];
    let display;
    if (k === 'recs' && Array.isArray(v)) {
      display = `<ul class="list-disc ml-4 space-y-1 text-sm text-gray-700">${v.map(r=>`<li>${escHtml(r)}</li>`).join('')}</ul>`;
    } else if (k === 'tasks' && Array.isArray(v)) {
      display = v.map(t=>`<div class="flex gap-2 text-sm"><span class="font-semibold ${t.p==='urgent'||t.p==='high'?'text-red-600':'text-amber-600'} w-14 flex-shrink-0">${t.p}</span><span class="text-gray-700">${escHtml(t.t)}</span></div>`).join('');
    } else {
      display = `<p class="text-sm text-gray-700">${escHtml(String(v))}</p>`;
    }
    return `<div class="px-4 py-3 border-t border-green-100">
      <div class="text-xs text-gray-400 mb-1">${labels[k]||k}</div>${display}</div>`;
  }).join('');

  result.innerHTML = `
    <div class="border border-green-200 rounded-xl overflow-hidden">
      <div class="bg-green-50 px-4 py-2 text-xs font-semibold text-green-700">✨ Suggested Changes (${keys.length} field${keys.length>1?'s':''})</div>
      ${rows}
      <div class="bg-gray-50 px-4 py-3 flex gap-2 border-t border-green-100">
        <button id="ai-apply-btn-${id}" onclick="applyAiCorrection('${id}')"
          class="bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-800">
          ✅ Apply Changes
        </button>
        <button onclick="document.getElementById('ai-result-${id}').innerHTML=''"
          class="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-300">
          Dismiss
        </button>
      </div>
    </div>`;
}

async function applyAiCorrection(id) {
  const updates = _pendingAiUpdates[id];
  if (!updates) return;
  const btn = document.getElementById(`ai-apply-btn-${id}`);
  if (btn) { btn.disabled = true; btn.textContent = 'Saving…'; }
  showLoading('Saving corrections…');
  try {
    await upsertSettings(id, updates);
    hideLoading();
    document.getElementById('app').innerHTML = renderPlant(id);
    window.scrollTo(0, 0);
  } catch(err) {
    hideLoading();
    alert(`Error saving: ${err.message}`);
  }
}

// ═══════════════════════════════════════════════════
// GARDEN CHAT VIEW
// ═══════════════════════════════════════════════════
let _chatHistory = [];

function buildPlantIndex() {
  return plants.map(p =>
    `${p.emoji} ${p.commonName} (${p.location}) — ${p.healthStatus} — waters: ${p.waterFreq}`
  ).join('\n');
}

function renderChat() {
  const historyHtml = _chatHistory.map(m => `
    <div class="flex ${m.role==='user'?'justify-end':'justify-start'} mb-3">
      <div class="max-w-[80%] rounded-2xl px-4 py-3 text-sm ${m.role==='user'?'bg-green-700 text-white':'bg-white border border-gray-200 text-gray-800'}">
        ${escHtml(m.content).replace(/\n/g,'<br>')}
      </div>
    </div>`).join('');

  return `
  <div class="max-w-2xl mx-auto">
    <div class="flex items-center gap-3 mb-4">
      <a href="#home" class="text-green-600 text-sm hover:text-green-800">← Garden</a>
      <h1 class="text-xl font-bold text-green-900">🌿 Garden Chat</h1>
      <button onclick="clearChat()" class="ml-auto text-xs text-gray-400 hover:text-gray-600">Clear history</button>
    </div>

    <div id="chat-messages" class="bg-gray-50 rounded-2xl p-4 min-h-64 max-h-[60vh] overflow-y-auto mb-4">
      ${historyHtml || '<p class="text-sm text-gray-400 text-center py-8">Ask anything about your garden…</p>'}
    </div>

    <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-3">
      <textarea id="chat-input" rows="2" placeholder="e.g. Which plants need watering today? What's wrong with my lemon tree?"
        class="w-full border-0 text-sm resize-none focus:outline-none p-1"
        onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();sendChat();}"></textarea>
      <div class="flex justify-end mt-2">
        <button onclick="sendChat()" id="chat-send-btn"
          class="bg-green-700 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-green-800 disabled:opacity-50">
          Send 💬
        </button>
      </div>
    </div>
    <p class="text-xs text-gray-400 mt-2 text-center">Remembers last 8 turns · Powered by Claude</p>
  </div>`;
}

async function sendChat() {
  const input = document.getElementById('chat-input');
  const btn = document.getElementById('chat-send-btn');
  const msg = (input?.value || '').trim();
  if (!msg) return;

  input.value = '';
  btn.disabled = true;

  _chatHistory.push({ role: 'user', content: msg });
  refreshChatMessages();

  try {
    const plantIndex = buildPlantIndex();
    const data = await apiFetch('/api/ai/chat', {
      method: 'POST',
      body: JSON.stringify({
        message: msg,
        history: _chatHistory.slice(0, -1), // exclude the just-added user msg (server builds full messages array)
        plantIndex,
      }),
    });
    _chatHistory.push({ role: 'assistant', content: data.reply });
  } catch(err) {
    _chatHistory.push({ role: 'assistant', content: `⚠️ Error: ${err.message}` });
  } finally {
    btn.disabled = false;
    refreshChatMessages();
  }
}

function refreshChatMessages() {
  const container = document.getElementById('chat-messages');
  if (!container) return;
  const historyHtml = _chatHistory.map(m => `
    <div class="flex ${m.role==='user'?'justify-end':'justify-start'} mb-3">
      <div class="max-w-[80%] rounded-2xl px-4 py-3 text-sm ${m.role==='user'?'bg-green-700 text-white':'bg-white border border-gray-200 text-gray-800'}">
        ${escHtml(m.content).replace(/\n/g,'<br>')}
      </div>
    </div>`).join('');
  container.innerHTML = historyHtml || '<p class="text-sm text-gray-400 text-center py-8">Ask anything about your garden…</p>';
  container.scrollTop = container.scrollHeight;
}

function clearChat() {
  _chatHistory = [];
  const container = document.getElementById('chat-messages');
  if (container) container.innerHTML = '<p class="text-sm text-gray-400 text-center py-8">Ask anything about your garden…</p>';
}

// ═══════════════════════════════════════════════════
// EDIT VIEW
// ═══════════════════════════════════════════════════
function renderEdit(id) {
  const p = getPlant(id);
  if (!p) return `<div class="text-center py-20 text-gray-400">Plant not found.</div>`;
  return `
  <div class="max-w-2xl mx-auto">
    <a href="#plant/${id}" class="text-green-600 text-sm hover:text-green-800 block mb-6">← Back to ${escHtml(p.commonName)}</a>
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-6">✏️ Edit ${escHtml(p.commonName)}</h2>
      <div class="space-y-4" id="edit-form">
        ${fld('Nickname','nickname',p.nickname,'text','e.g. The Big Ficus')}
        <div><label class="block text-sm font-medium text-gray-700 mb-1">Health Status</label>
          <select name="healthStatus" class="w-full border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-300">
            <option value="good"  ${p.healthStatus==='good'?'selected':''}>✅ Healthy</option>
            <option value="fair"  ${p.healthStatus==='fair'?'selected':''}>⚠️ Needs Attention</option>
            <option value="poor"  ${p.healthStatus==='poor'?'selected':''}>🔴 At Risk</option>
          </select></div>
        ${fld('Age','age',p.age,'text','e.g. 2 years')}
        ${fld('Date Planted','datePlanted',p.datePlanted,'date','')}
        ${fld('Last Watered','lastWatered',p.lastWatered,'date','')}
        ${fld('Last Fertilized','lastFertilized',p.lastFertilized,'date','')}
        ${fld('Sunlight','sunlight',p.sunlight,'text','e.g. Full Sun')}
        ${fld('Watering','watering',p.watering,'text','e.g. Every 2 days')}
        ${fld('Fertilizer','fertilizer',p.fertilizer,'text','e.g. NPK 10-10-10')}
        ${fld('Fertilize Every','fertFreq',p.fertFreq,'text','e.g. Monthly')}
        ${fld('Soil','soil',p.soil,'text','e.g. Well-draining loam')}
        ${fld('Notes','notes',p.notes,'text','')}
      </div>
      <div class="flex gap-3 mt-6">
        <button onclick="doSaveEdit('${id}')" class="bg-green-700 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-green-800">Save Changes</button>
        <a href="#plant/${id}" class="border border-gray-200 text-gray-600 px-6 py-2.5 rounded-xl font-medium hover:bg-gray-50">Cancel</a>
      </div>
      <div id="edit-msg" class="text-sm mt-3"></div>
    </div>
  </div>`;
}

function fld(label, name, value, type, placeholder) {
  return `<div><label class="block text-sm font-medium text-gray-700 mb-1">${label}</label>
    <input type="${type}" name="${name}" value="${escHtml(value||'')}" placeholder="${escHtml(placeholder||'')}"
      class="w-full border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-300"></div>`;
}

// ═══════════════════════════════════════════════════
// ADD PLANT VIEW
// ═══════════════════════════════════════════════════
function renderAdd() {
  const locOpts = LOCATIONS.map(l => `<option value="${l}">${l}</option>`).join('');
  return `
  <div class="max-w-2xl mx-auto">
    <a href="#home" class="text-green-600 text-sm hover:text-green-800 block mb-6">← Back to Garden</a>
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-6">➕ Add New Plant</h2>
      <div class="space-y-4" id="add-form">
        ${fld('Common Name *','commonName','','text','e.g. Rose, Tulsi')}
        ${fld('Scientific Name','scientificName','','text','e.g. Rosa sp.')}
        <div><label class="block text-sm font-medium text-gray-700 mb-1">Location *</label>
          <select name="location" class="w-full border border-gray-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-300">${locOpts}</select></div>
        ${fld('Emoji','emoji','🌱','text','Pick an emoji')}
        ${fld('Category','category','','text','e.g. Flowering Shrub, Herb, Tree')}
        ${fld('Sunlight Needs','sunlight','','text','e.g. Full Sun')}
        ${fld('Watering','watering','','text','e.g. Every 2 days')}
        ${fld('Fertilizer','fertilizer','','text','e.g. NPK 10-10-10 monthly')}
        ${fld('Soil','soil','','text','e.g. Loamy, well-draining')}
        ${fld('Age','age','','text','e.g. 2 years')}
        ${fld('Date Planted','datePlanted','','date','')}
      </div>
      <div class="flex gap-3 mt-6">
        <button onclick="doAddPlant()" class="bg-green-700 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-green-800">Add Plant</button>
        <a href="#home" class="border border-gray-200 text-gray-600 px-6 py-2.5 rounded-xl font-medium hover:bg-gray-50">Cancel</a>
      </div>
      <div id="add-msg" class="text-sm mt-3"></div>
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════
// TASKS VIEW
// ═══════════════════════════════════════════════════
function renderTasks() {
  const groups = groupByLocation(plants);
  const genTasks = [
    {p:'urgent',t:'Check water lily container level daily — high evaporation in heat'},
    {p:'urgent',t:'Harvest broccoli head immediately if not done — bolting risk is critical'},
    {p:'high',  t:'Increase watering frequency for all plants as temperatures rise'},
    {p:'high',  t:'Check coconut trunk for Red Palm Weevil (sawdust-like frass at base)'},
    {p:'medium',t:'Apply mulch around fruit trees (lemon, pomegranate, banana) to conserve moisture'},
    {p:'medium',t:'Inspect all plants for aphids and spider mites — pest pressure rises in dry heat'},
    {p:'medium',t:'Fertilize fruit trees (lemon, pomegranate, longan, banana)'},
    {p:'medium',t:'Divide lemongrass clumps — March/April is the ideal time before monsoon'},
    {p:'medium',t:'Top-dress indoor pot plants (China Doll, Monstera) with fresh compost'},
    {p:'low',   t:'Document any new growth, blooms, or changes with photos in the app'},
    {p:'low',   t:'Prepare garden waste into compost for the upcoming monsoon season'},
  ].sort((a,b)=>({urgent:0,high:1,medium:2,low:3}[a.p])-({urgent:0,high:1,medium:2,low:3}[b.p]));

  const urgentCount = plants.flatMap(p=>p.tasks||[]).filter(t=>t.p==='urgent').length + genTasks.filter(t=>t.p==='urgent').length;
  const highCount   = plants.flatMap(p=>p.tasks||[]).filter(t=>t.p==='high').length   + genTasks.filter(t=>t.p==='high').length;

  const taskRow = (t,key) => `
    <div class="bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100 flex items-start gap-3 ${priorityClass(t.p)}">
      <input type="checkbox" id="task-${key}" class="mt-0.5 w-4 h-4 accent-green-600 flex-shrink-0" onchange="this.closest('div').classList.toggle('opacity-50',this.checked)">
      <div class="flex-1 min-w-0">
        <div class="text-xs font-bold">${priorityLabel(t.p)}</div>
        <div class="text-sm text-gray-700 mt-0.5">${t.t}</div>
        ${t.plant ? `<div class="text-xs text-green-600 mt-0.5"><a href="#plant/${t.plant.id}" class="hover:underline">${t.plant.emoji} ${escHtml(t.plant.nickname||t.plant.commonName)}</a></div>` : ''}
      </div>
    </div>`;

  let locHtml = '';
  LOCATIONS.forEach(loc => {
    const locTasks = plants
      .filter(p => p.location === loc)
      .flatMap(p => (p.tasks||[]).map(t => ({ ...t, plant: p })))
      .sort((a,b) => ({urgent:0,high:1,medium:2,low:3}[a.p]) - ({urgent:0,high:1,medium:2,low:3}[b.p]));
    if (!locTasks.length) return;
    locHtml += `
    <div class="mb-8">
      <h2 class="text-lg font-bold text-green-800 mb-3">${LOC_ICONS[loc]||'🌿'} ${loc}</h2>
      <div class="space-y-2">${locTasks.map((t,i)=>taskRow(t,`${loc}-${i}`)).join('')}</div>
    </div>`;
  });

  return `
  <div>
    <div class="flex items-center justify-between mb-6 no-print">
      <div>
        <h1 class="text-2xl font-bold text-green-900">📋 Weekly Gardener Tasks</h1>
        <p class="text-green-700 text-sm mt-0.5">Week of ${new Date().toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'})}</p>
      </div>
      <button onclick="window.print()" class="bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-50">🖨️ Print</button>
    </div>

    <div class="flex gap-3 mb-6 flex-wrap no-print">
      <span class="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">${urgentCount} Urgent</span>
      <span class="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">${highCount} High Priority</span>
    </div>

    <div class="mb-8">
      <h2 class="text-lg font-bold text-green-800 mb-3">🗓️ General Garden Tasks</h2>
      <div class="space-y-2">${genTasks.map((t,i)=>taskRow(t,`gen-${i}`)).join('')}</div>
    </div>

    <h2 class="text-lg font-bold text-green-800 mb-4">🌿 Plant-by-Plant Tasks</h2>
    ${locHtml}
  </div>`;
}

// ═══════════════════════════════════════════════════
// EVENT HANDLERS
// ═══════════════════════════════════════════════════
async function doSaveEdit(id) {
  const form = document.getElementById('edit-form');
  const get = name => { const el = form.querySelector(`[name="${name}"]`); return el ? el.value.trim() : ''; };
  const msg = document.getElementById('edit-msg');
  msg.innerHTML = '<span class="text-gray-500">Saving…</span>';
  try {
    await upsertSettings(id, {
      nickname: get('nickname'), healthStatus: get('healthStatus'),
      age: get('age'), datePlanted: get('datePlanted'),
      lastWatered: get('lastWatered'), lastFertilized: get('lastFertilized'),
      sunlight: get('sunlight'), watering: get('watering'),
      fertilizer: get('fertilizer'), fertFreq: get('fertFreq'),
      soil: get('soil'), notes: get('notes'),
    });
    location.hash = `#plant/${id}`;
  } catch(err) {
    msg.innerHTML = `<span class="text-red-600">Error: ${escHtml(err.message)}</span>`;
  }
}

async function doLogCare(id, type) {
  const note = prompt(`Note for ${type} (optional):`);
  if (note === null) return;
  showLoading(`Logging ${type}…`);
  try {
    const fields = {};
    if (type === 'Watered') fields.lastWatered = today();
    if (type === 'Fertilized') fields.lastFertilized = today();
    if (Object.keys(fields).length) await upsertSettings(id, fields);
    await insertCareEvent(id, type, note);
    hideLoading(); router();
  } catch(err) {
    hideLoading(); alert('Error: ' + err.message);
  }
}

async function doAddNote(id) {
  const ta = document.getElementById('new-note');
  if (!ta || !ta.value.trim()) return;
  const p = getPlant(id);
  const newEntry = `[${new Date().toLocaleDateString('en-IN')}] ${ta.value.trim()}`;
  const newNotes = p.notes ? p.notes + '\n' + newEntry : newEntry;
  showLoading('Saving note…');
  try {
    await upsertSettings(id, { notes: newNotes });
    hideLoading(); router();
  } catch(err) {
    hideLoading(); alert('Error: ' + err.message);
  }
}

async function doUploadPhoto(input, id) {
  if (!input.files || !input.files[0]) return;
  const file = input.files[0];
  const msgEl = document.getElementById(`photo-upload-msg-${id}`);
  showLoading('Uploading photo…');
  try {
    await uploadPhoto(id, file);
    hideLoading(); router();
  } catch(err) {
    hideLoading();
    if (msgEl) msgEl.textContent = 'Upload failed: ' + err.message;
    else alert('Upload failed: ' + err.message);
  }
}

async function delPhoto(plantId, photoId, storagePath) {
  if (!confirm('Delete this photo permanently?')) return;
  showLoading('Deleting photo…');
  try {
    await deletePhotoById(plantId, photoId, storagePath);
    hideLoading(); router();
  } catch(err) {
    hideLoading(); alert('Error: ' + err.message);
  }
}

async function doAddPlant() {
  const form = document.getElementById('add-form');
  const get = name => { const el = form.querySelector(`[name="${name}"]`); return el ? el.value.trim() : ''; };
  const commonName = get('commonName');
  if (!commonName) { alert('Please enter a plant name.'); return; }
  const msg = document.getElementById('add-msg');
  msg.innerHTML = '<span class="text-gray-500">Adding plant…</span>';
  const newId = 'custom-' + Date.now();
  try {
    await insertCustomPlant({
      id: newId, common_name: commonName,
      scientific_name: get('scientificName'), location: get('location'),
      emoji: get('emoji')||'🌱', category: get('category'),
      sunlight: get('sunlight'), watering: get('watering'),
      fertilizer: get('fertilizer'), fert_freq: get('fertFreq'),
      soil: get('soil'), edible: false,
    });
    if (get('age') || get('datePlanted')) {
      await upsertSettings(newId, { age: get('age'), datePlanted: get('datePlanted') });
    }
    await loadData();
    location.hash = `#plant/${newId}`;
  } catch(err) {
    msg.innerHTML = `<span class="text-red-600">Error: ${escHtml(err.message)}</span>`;
  }
}

async function syncNow() {
  await loadData();
  router();
}

function openLightbox(url) {
  document.getElementById('lightbox-img').src = url;
  const lb = document.getElementById('lightbox');
  lb.classList.remove('hidden'); lb.classList.add('flex');
}
function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.add('hidden'); lb.classList.remove('flex');
}
window.closeLightbox = closeLightbox;
document.getElementById('lightbox').addEventListener('click', closeLightbox);

function navLinks() {
  return `
    <a href="#home"  class="px-3 py-2 rounded hover:bg-green-700 transition-colors font-medium">🏡 Garden</a>
    <a href="#tasks" class="px-3 py-2 rounded hover:bg-green-700 transition-colors font-medium">📋 Tasks</a>
    <a href="#chat"  class="px-3 py-2 rounded hover:bg-green-700 transition-colors font-medium">💬 Chat</a>
    <a href="#add"   class="px-3 py-2 rounded hover:bg-green-700 transition-colors font-medium">➕ Add</a>
    <button onclick="syncNow()" class="px-3 py-2 rounded hover:bg-green-700 transition-colors font-medium" title="Sync">🔄</button>
    ${isAuthRequired() ? `<button onclick="doLogout()" class="px-3 py-2 rounded hover:bg-green-700 transition-colors font-medium text-green-300" title="Log out">🔒</button>` : ''}`;
}

// ═══════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════
async function startGarden() {
  initStorageClient();
  try {
    await loadData();
    document.getElementById('nav-links').innerHTML = navLinks();
    router();
  } catch(err) {
    hideLoading();
    document.getElementById('app').innerHTML = `
      <div class="bg-red-50 border border-red-200 rounded-2xl p-6 max-w-lg mx-auto mt-10">
        <div class="font-bold text-red-800 mb-2">Could not load garden data</div>
        <div class="text-sm text-red-700 mb-4">${escHtml(err.message)}</div>
        <button onclick="startGarden()" class="bg-red-700 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-red-800">🔄 Retry</button>
      </div>`;
  }
}

async function init() {
  // Debug: log config state so we can see what's happening in the console
  console.log('[garden] init — authRequired:', isAuthRequired(), '| sessionValid:', checkAuthSession(), '| hashLen:', BAKED_HASH.length);
  if (isAuthRequired() && !checkAuthSession()) { renderLogin(); return; }
  await startGarden();
}

init();
