const test = {
	portfolio: { charId: 'pnFdr4Q7', version: 8, baseline: 0 },
	metadata: {
		gameCode: 'starfinder',
		gameName: 'Starfinder Roleplaying Game',
		gameMajor: 3,
		gameMinor: 14,
		hloVersion: 1028,
		exportVersion: 1,
		legal:
			'Hero Lab and the Hero Lab logo are Registered Trademarks of LWD Technology, Inc. Free download at https://www.wolflair.com\nStarfinder and associated marks and logos are trademarks of Paizo Inc., and are used under license.',
	},
	actors: {
		'actor.1': {
			name: 'Jackson Pender',
			player: 'Jackson',
			gameValues: {
				actLevel: 1,
				actLevelNet: 1,
				actXPAward: 200,
				actAlignment: 'Lawful Good',
				actRace: 'vesk',
				actTypeText: 'Humanoid (Vesk)',
				actClassText: 'Soldier (Starfinder Forerunner) 1',
				actEncumbered: 9,
				actOverburdened: 18,
				actSpace: 5,
				actReach: 5,
				actSocietyChar: 701,
				Gender: 'Unspecified',
			},
			items: {
				'Initiative.38': {
					name: 'Initiative',
					description:
						'When a combatant enters battle, she rolls an initiative check to determine when she’ll act in each combat round relative to the other characters. An initiative check is a d20 roll to which a character adds her Dexterity modifier plus any other modifiers from feats, spells, and other effects. The result of a character’s initiative check is referred to as her initiative count. The GM determines a combat’s initiative order by organizing the characters’ initiative counts in descending order. During combat, characters act in initiative order, from highest initiative count to lowest initiative count; their relative order typically remains the same throughout the combat.\n\nIf two or more combatants have the same initiative count, the order in which they act is determined by their total initiative modifiers (the character with the highest modifier acts first). If there is still a tie, the tied characters should each roll a d20, and whoever rolls highest goes first. This final method of determining which character’s initiative order is earlier is often referred to as “rolling off.” However, if the GM allows it, characters whose initiative results are a tie might decide among themselves which character acts first based on strategies or other tactical factors.\n\nA character rolls to determine her initiative count only once in each combat. Even if a character can’t take actions-for example, if she’s is under the effect of a hold person spell or is otherwise paralyzed-the character retains her initiative count for the duration of the encounter. The exception is when a character takes an action that results in her initiative changing (see the Ready an Action and Delay on page 249).\n\nAny characters who enter combat after it has already begun roll initiative checks when they first enter combat. The GM then inserts them into the initiative order based on their initiative counts.',
					summary:
						'When a combatant enters battle, she rolls an initiative check to determine when she’ll act in each combat round relative to the other characters.',
					compset: 'Derived',
					stAbScModifier: 3,
					stNet: 3,
					AbScUsed: 'asDex',
				},
				'Personal.99': {
					name: 'Personal',
					compset: 'Personal',
					perAge: 16,
					perHeight: 84,
					perWeight: 250,
					perGenderText: 'Unspecified',
				},
				'abArmorSavantVes.120': {
					name: 'Armor Savant',
					description:
						'Vesk use armor in a way that complements their uniquely sturdy physiology. When wearing armor, they gain a +1 racial bonus to AC. When they’re wearing heavy armor, their armor check penalty is 1 less severe than normal.',
					summary: '+1 to AC when in armor, and -1 ACP for heavy armor.',
					compset: 'Ability',
				},
				'abFearlessVes.121': {
					name: 'Fearless',
					description:
						'Vesk receive a +2 racial bonus to saving throws against fear effects.',
					compset: 'Ability',
				},
				'abGrenExpertSdr.150': {
					name: 'Grenade Expert (+20 ft.) (Ex)',
					description:
						'You increase the range increment of your thrown grenades by 5 × your Strength bonus. In addition, you’re able to salvage enough materials to create a grenade without paying for it. Creating a grenade takes 10 minutes. You can create any grenade whose item level is less than or equal to your soldier level, but this grenade is unstable and only you can use it effectively. If anyone else tries to use the grenade, it is a dud. You can have only one grenade created by this ability at one time (if you create a new grenade using this ability, the old grenade no longer works).',
					summary:
						'10 min to salvage a grenade of own level or less, but only works for you and only 1 at a time.',
					compset: 'Ability',
					AbilType: 'Extra',
				},
				'abLowLightVision.119': {
					name: 'Low-Light Vision (Ex)',
					description:
						'The creature can see in dim light as if it were normal light. Low-light vision is color vision, unlike darkvision. A creature with low-light vision can read as long as even the tiniest source of light is next to it. Creatures with low-light vision can see outdoors on a moonlit night as well as they can during the day, since the moon casts dim light.',
					summary: 'See in dim light as if it were normal light.',
					compset: 'Ability',
					AbilType: 'Extra',
				},
				'abThemeKnowMer.141': {
					name: 'Theme Knowledge (Ex)',
					description:
						'You are knowledgeable about the military, from rival mercenary groups to standard military procedures to planetary armed forces, and you can draw upon this fount of information to aid your adventurous pursuits. Reduce the DC of Culture checks and Profession (mercenary) checks to recall knowledge about hierarchies, practices, personnel, and so on in the military by 5. Athletics is a class skill for you, though if it is a class skill from the class you take at 1st level, you instead gain a +1 bonus to Athletics checks. In addition, you gain an ability adjustment of +1 to Strength at character creation.',
					summary:
						'-5 DC for Culture/Profession checks related to knowledge of militaries.',
					compset: 'Ability',
					AbScUsed: 'asStr',
					AbilType: 'Extra',
				},
				'acEAC.50': {
					name: 'Energy Armor Class',
					description:
						'Your Armor Class (AC) represents how hard it is for opponents to land a solid damaging blow on you. Your Armor Class (AC) is the minimum attack roll result that an opponent needs to hit you and deal damage. Armor Class is divided into two categories: Energy Armor Class (EAC) and Kinetic Armor Class (KAC). Any reference to Armor Class, including bonuses and penalties, applies to both EAC and KAC unless otherwise specified.\n\nYour EAC and KAC are primarily determined by your armor bonus (most often from a suit of armor you wear) plus your Dexterity modifier. Calculate your EAC and KAC using the following formula: 10 + your armor’s EAC or KAC armor bonus (whichever is appropriate) + your Dexterity modifier.\n\nMost suits of armor provide separate armor bonuses to EAC and KAC. However, some suits of armor’s conditions prevent you from using your full Dexterity bonus. Various other bonuses can apply from class features, feats, special circumstances, and so on. For more information on bonuses, see page 266.\n\nEnergy Armor Class (EAC)\nYour Energy Armor Class (EAC) represents the defenses you have against attacks that only deal damage as a result of some kind of energy (such as acid, cold, electricity, fire, or sonic damage). When an opponent’s attack would deal only energy damage (if he is using, for example, a laser pistol), his attack roll result is compared to your EAC to determine whether he hits you. Some weapons and effects that use magical or exotic untyped energies might also target your EAC; the description of the weapon or effect tells you if this is the case.',
					summary:
						'Your Armor Class (AC) represents how hard it is for opponents to land a solid damaging blow on you.',
					compset: 'ArmorClass',
					acFlatfooted: 11,
					stBaseBon: 10,
					stAbScModifier: 3,
					stNet: 13,
					AbScUsed: 'asDex',
				},
				'acKAC.51': {
					name: 'Kinetic Armor Class',
					description:
						'Your Armor Class (AC) represents how hard it is for opponents to land a solid damaging blow on you. Your Armor Class (AC) is the minimum attack roll result that an opponent needs to hit you and deal damage. Armor Class is divided into two categories: Energy Armor Class (EAC) and Kinetic Armor Class (KAC). Any reference to Armor Class, including bonuses and penalties, applies to both EAC and KAC unless otherwise specified.\n\nYour EAC and KAC are primarily determined by your armor bonus (most often from a suit of armor you wear) plus your Dexterity modifier. Calculate your EAC and KAC using the following formula: 10 + your armor’s EAC or KAC armor bonus (whichever is appropriate) + your Dexterity modifier.\n\nMost suits of armor provide separate armor bonuses to EAC and KAC. However, some suits of armor’s conditions prevent you from using your full Dexterity bonus. Various other bonuses can apply from class features, feats, special circumstances, and so on. For more information on bonuses, see page 266.\n\nKinetic Armor Class (KAC)\nYour Kinetic Armor Class (KAC) represents the defenses you have against attacks that primarily deal damage as a result of a physical impact. This generally includes attacks that deal bludgeoning, piercing, or slashing damage (usually described as “kinetic attacks”), as well as impacts from falling and damage from crushing or constriction. When a foe’s attack would deal such damage (if he is using, for example, a starknife), even if it also deals energy damage, his attack roll result is compared to your KAC to determine whether he hits.',
					summary:
						'Your Armor Class (AC) represents how hard it is for opponents to land a solid damaging blow on you.',
					compset: 'ArmorClass',
					acFlatfooted: 11,
					stBaseBon: 10,
					stAbScModifier: 3,
					stNet: 13,
					AbScUsed: 'asDex',
				},
				'acManeuver.52': {
					name: 'AC vs. Combat Maneuvers',
					description:
						'Your Armor Class (AC) represents how hard it is for opponents to land a solid damaging blow on you. Your Armor Class (AC) is the minimum attack roll result that an opponent needs to hit you and deal damage. Armor Class is divided into two categories: Energy Armor Class (EAC) and Kinetic Armor Class (KAC). Any reference to Armor Class, including bonuses and penalties, applies to both EAC and KAC unless otherwise specified.\n\nYour EAC and KAC are primarily determined by your armor bonus (most often from a suit of armor you wear) plus your Dexterity modifier. Calculate your EAC and KAC using the following formula: 10 + your armor’s EAC or KAC armor bonus (whichever is appropriate) + your Dexterity modifier.\n\nMost suits of armor provide separate armor bonuses to EAC and KAC. However, some suits of armor’s conditions prevent you from using your full Dexterity bonus. Various other bonuses can apply from class features, feats, special circumstances, and so on. For more information on bonuses, see page 266.',
					summary: 'This is equal to KAC+8.',
					compset: 'ArmorClass',
					acFlatfooted: 19,
					stBaseBon: 18,
					stAbScModifier: 3,
					stNet: 21,
					AbScUsed: 'asDex',
				},
				'asCha.37': {
					name: 'Charisma',
					description:
						'Charisma measures a character’s personality, personal magnetism, ability to lead, and appearance. A character with a Charisma score of 0 is unconscious. Your character’s Charisma modifier is factored into the following:\n\n• Bluff, Diplomacy, Disguise, Intimidate, and some Profession skill checks.\n\n• Checks that represent attempts to influence others, including the envoy’s extraordinary abilities.',
					summary:
						'Charisma measures a character’s personality, personal magnetism, ability to lead, and appearance.',
					compset: 'AbilScore',
					stNet: 11,
					AbScUsed: 'asCha',
				},
				'asCon.34': {
					name: 'Constitution',
					description:
						'Constitution represents your character’s health. A living creature whose Constitution score reaches 0 dies. Your character’s Constitution modifier is factored into the following:\n\n• Stamina Points (see page 22), which represent the damage your character can shrug off before it starts to be a problem. If this score changes enough to alter its modifier, your character’s Stamina Points increase or decrease accordingly.\n\n• Fortitude saves (to resist diseases, poisons, and similar threats).',
					summary: 'Constitution represents your character’s health.',
					compset: 'AbilScore',
					stAbScModifier: 4,
					stNet: 18,
					stMiscMod: 2,
					AbScUsed: 'asCon',
				},
				'asDex.33': {
					name: 'Dexterity',
					description:
						'Dexterity measures agility, balance, and reflexes. A character with a Dexterity score of 0 is unconscious. Your character’s Dexterity modifier is factored into the following:\n\n• Ranged attack rolls, such as those made with projectile weapons and energy weapons, as well as some spells.\n\n• Energy Armor Class (EAC) and Kinetic Armor Class (KAC); see page 240 for details.\n\n• Reflex saving throws (for leaping out of harm’s way).\n\n• Acrobatics, Piloting, Sleight of Hand, and Stealth skill checks.',
					summary: 'Dexterity measures agility, balance, and reflexes.',
					compset: 'AbilScore',
					stAbScModifier: 3,
					stNet: 17,
					AbScUsed: 'asDex',
				},
				'asInt.36': {
					name: 'Intelligence',
					description:
						'Intelligence represents how well your character learns and reasons, and is often associated with knowledge and education. Animals have Intelligence scores of 1 or 2, and any creature capable of understanding a language has a score of at least 3. A character with an Intelligence score of 0 is unconscious. Your character’s Intelligence modifier is factored into the following:\n\n• The number of bonus languages your character knows at the start of the game. Even if this modifier is a penalty, your character can still use her starting languages unless her Intelligence score is lower than 3. See page 40 for more about languages.\n\n• The number of skill ranks gained each level, though your character always gets at least 1 skill rank per level.\n\n• Computers, Culture, Engineering, Life Science, Medicine, Physical Science, and some Profession skill checks.\n\n• Bonus technomancer spells. The minimum Intelligence score needed to cast a technomancer spell is 10 + the spell’s level.',
					summary:
						'Intelligence represents how well your character learns and reasons, and is often associated with knowledge and education.',
					compset: 'AbilScore',
					stNet: 11,
					stMiscMod: -2,
					AbScUsed: 'asInt',
				},
				'asStr.32': {
					name: 'Strength',
					description:
						'Strength measures muscle and physical power. A character with a Strength score of 0 is unconscious. Your character’s Strength modifier is factored into the following:\n\n• Melee attack rolls and attack rolls made with thrown weapons (such as grenades).\n\n• Damage rolls when using melee weapons or thrown weapons (but not grenades).\n\n• Athletics skill checks.\n\n• Strength checks (for breaking down doors and the like).\n\n• How much gear your character can carry (see page 167).',
					summary: 'Strength measures muscle and physical power.',
					compset: 'AbilScore',
					stAbScModifier: 4,
					stNet: 18,
					stMiscMod: 3,
					AbScUsed: 'asStr',
				},
				'asWis.35': {
					name: 'Wisdom',
					description:
						'Wisdom describes a character’s common sense, intuition, and willpower. A character with a Wisdom score of 0 is unconscious. Your character’s Wisdom modifier is factored into the following:\n\n• Will saving throws (for defending against things like magical mind control).\n\n• Mysticism, Perception, Sense Motive, Survival, and some Profession skill checks.\n\n• Bonus mystic spells. The minimum Wisdom score needed to cast a mystic spell is 10 + the spell’s level.',
					summary:
						'Wisdom describes a character’s common sense, intuition, and willpower.',
					compset: 'AbilScore',
					stAbScModifier: 2,
					stNet: 15,
					AbScUsed: 'asWis',
				},
				'clSoldier.127': {
					name: 'Soldier (Starfinder Forerunner)',
					compset: 'Class',
					clLevelNet: 1,
				},
				'deiAtheist.117': {
					name: 'Atheist',
					description: 'The character does not worship a deity.',
					compset: 'Deity',
				},
				'hwVeskarium.115': {
					name: 'The Veskarium',
					description:
						'The Veskarium refers to the eight-planet solar system that the militant vesk rule. The scaly race evolved on the planet closest to the sun, and from the beginning they easily cowed the bands of cave-dwelling snake-people, jackal-faced arthropods, and even stranger creatures there. This planet provided rich natural resources, an abundance of dry land, and beasts of war. However, its people hungered for even more power.\n\nEventually, vesk took to space. They called their home Vesk Prime and renamed and numbered the subsequent planets farther from the sun as they overran them. The result is the Veskarium, a vast empire with a wide array of subjects. This includes the stone-faced squidfolk of Vesk-2, the antlike beings of Vesk-5, the feline humanoid barbarians of Vesk-6, and the pacifist frost behemoths of Vesk-7 and Vesk-8.\n\nVesk rule from enormous military bases that double as governmental headquarters situated in key positions on each planet. A high despot rules each planet, forming a council that makes decisions for the Veskarium at large. Though their laws are autocratic, vesk see both themselves and their society as deeply honorable. They strive to provide their citizens with a high standard of living, though their societal structures are unforgiving and they inherently view non-vesk as inferior.',
					compset: 'Homeworld',
				},
				'lnCommon.124': {
					name: 'Common',
					description:
						'Common, the most prevalent trade tongue of the Pact Worlds, is believed to be based on one or more of the old human languages of Golarion.',
					compset: 'Language',
				},
				'lnVesk.116': {
					name: 'Vesk',
					compset: 'Language',
					lnSpeakers: 'Vesk, inhabitants of the Veskarium',
				},
				'lnVesk.123': {
					name: 'Vesk',
					compset: 'Language',
					lnSpeakers: 'Vesk, inhabitants of the Veskarium',
				},
				'mvSpeed.125': {
					name: 'Speed',
					description:
						'Your speed is how far you can move with a single move action. Your speed depends mostly on your race and your armor type, though magic and equipment can also impact it. Wearing heavy armor or carrying too much can reduce your speed (see Armor and Carrying Capacity in Chapter 7 for more details).\n\nIf you use two move actions in a round (sometimes called a “double move”), you can move up to double your speed. If you spend the entire round running (using the run action; see page 248), you can move up to quadruple your speed.\n\nA creature’s land speed refers to how far it moves across the ground with its appendages. Most Medium creatures have a land speed of 30 feet (6 squares). If a creature has additional movement speeds, such as a climb speed or a fly speed, those speeds are listed in the creature’s statistics separately (see Additional Movement Types on page 258). If a rule references speed without specifying a movement type, it refers to whatever movement type you are using.',
					compset: 'Movement',
					stNet: 30,
				},
				'raVesk.118': {
					name: 'Vesk',
					description:
						'Heavily muscled and covered with thick scales and short, sharp horns, the reptilian vesk are exactly as predatory and warlike as they appear. Originally hailing from a star system near the Pact Worlds, they sought to conquer and subdue their stellar neighbors, as they had all the other intelligent races in their own system, until an overwhelming threat forced them into a grudging alliance with the Pact Worlds-for now.\n\nPHYSICAL DESCRIPTION\nThe lizard-like vesk stand close to 7 feet tall, are thick with muscle, and are covered in tough, scaly skin. Though they’ve long since adopted technological weapons, they retain the thick claws and teeth of natural predators and enjoy using them to intimidate “softer” races. In addition, they also have long, powerful tails-while these are primarily used for balance, some vesk martial arts incorporate formidable tail slaps. Small horn spikes dot the skulls of both sexes, and protrude from their lower jaws in bony “beards” that sometimes extend down their spines to their tails. Female vesk are often larger than their male counterparts, and whereas males are various shades of green, females often have vibrant, mottled coloration that’s considered an indicator of both health and attractiveness.\n\nHOME WORLD\nVesk first arose on a single world around their sun but quickly spread to the others, turning potential competitor races (as the vesk saw them) into vassals in the vast empire they call the Veskarium. Today, these other worlds officially no longer even have names, only numbers correlating to their distance from the sun (such as Vesk-6). The exception to this rule is Vesk Prime, vesk’s ancestral home, which remains the seat of their government and high society.\n\nSOCIETY AND ALIGNMENT\nVesk society is highly organized and militaristic. While merchants and others with peaceful professions can advance economically, political power is the exclusive domain of those who’ve proven themselves in armed conflict. Surprisingly, this proof doesn’t need to come through military service, or even benefit the Veskarium. Many vesk attain similar elevation in social status through performing mercenary work, engaging in dueling, or providing security on exploration missions. Though obsessed with conquest, dominance, and social rank, vesk have an equally strong sense of honor and pride in fulfilling their agreements and treating subordinates of all races fairly. They are stoic and taciturn with strangers but capable of great bursts of emotion in private or in the heat of battle. Vesk society tends to be efficient, respectful, and law-abiding-especially since nearly any insult or violation of custom could trigger a brutally violent blood debt. Even outside of their home system, vesk are most often lawful, though usually according to their own code of honor rather than that of whatever society they happen to be in. They tend toward a neutral morality, though individuals can easily skew good or evil.\n\nRELATIONS\nVesk’s love of military conquest and empire building originally led to significant skirmishes between their star system and the nearby Pact Worlds, and the ensuing conflict-often called the Silent War-might have continued indefinitely had the Swarm not attacked both systems simultaneously. Banding together for mutual defense, vesk and Pact Worlds cultures successfully fought off the Swarm, forging a tentative peace in the process.\n\nVesk respect honor, strength, and self-mastery. Though their relations with the races of the Pact Worlds remain strained due to the only barely averted war, they admire androids’ dispassionate consistency, kasathas’ sense of honor, and the strength of lashuntas in battle. However, they find ysoki weak and frivolous, and humans quick to break their agreements. Shirrens perplex vesk with their refusal to parlay their strengths, including their instinctive coordination in battle and willingness to die for their comrades, into an empire.\n\nADVENTURERS\nVesk adventuring with races from other systems fall into two categories. The first are mercenaries or glory-seekers looking for a chance to engage in honorable combat and build up their prestige. The second are nonwarrior vesk who have rejected their home society for its obsession with combat and have chosen instead to seek opportunities among more open-minded races. Warrior vesk most often fit the soldier class, though a growing number have become intrigued by the path of the solarian. Noncombatant vesk often lean toward becoming mystics, though some overcome the traditional vesk culture’s dismissal of education to become mechanics or even technomancers.\n\nNAMES\nVesk names are often long and combine elements of their parents’ names, as well as those of other prominent ancestors. These are frequently shortened for daily use by friends, though abridging a vesk’s name without permission is a grave insult. In addition, some vesk take on epithets related to their victories in combat, which they sometimes use in addition to or in place of a family name, such as “Three Guns,” “Voidwalker,” or “Squadeater.” Some sample vesk names include Dmotralan, Evdokayo, Goromitali, Julakesh, Katara, Obozaya, Radokama, Sarangari, Sobok, Terikoraz, and Ymeros-Ahandi.',
					compset: 'Race',
					raHPStart: 6,
				},
				'rvHitPoints.109': {
					name: 'Hit Points',
					compset: 'Reserves',
					rvMax: 13,
					rvCurrent: 13,
				},
				'rvResolvePoints.110': {
					name: 'Resolve Points',
					compset: 'Reserves',
					rvMax: 5,
					rvCurrent: 5,
				},
				'rvStaminaPoints.108': {
					name: 'Stamina',
					compset: 'Reserves',
					rvMax: 11,
					rvCurrent: 11,
				},
				'skAcrobatics.60': {
					name: 'Acrobatics',
					description:
						'You can keep your balance while traversing narrow or treacherous surfaces, escape from restraints, and tumble to avoid attacks. You also use Acrobatics to determine the success of difficult maneuvers while flying.\n\nBalance\nAs part of a move action, you can use Acrobatics to move across narrow surfaces and uneven ground without falling. A successful check allows you to move at half your land speed across such a surface. While balancing, you are flat-footed. If you fail the Acrobatics check to begin moving across a narrow surface or uneven ground, your move action ends at the point just before you’d need to begin balancing. If you fail the check while already balancing (having succeeded on a previous turn), you fall prone and the GM may rule that you start falling, depending on the type of surface you are moving across.\n\nIf you take damage while balancing, you must immediately attempt an Acrobatics check at the initial DC. On a success, you remain balancing (and can continue to move if it is your turn). If you fail, you fall prone and, depending on the type of surface you are balancing upon, the GM can rule that you start falling. You can’t take 20 on Acrobatics checks to balance.\n\nThe DCs for Acrobatics checks to balance are based on the width of the surface you are traversing, but can also be adjusted based on environmental circumstances such as slope and surface conditions. Such modifiers are cumulative; use all that apply.\n\nSurface Width — DC\nGreater than 3 feet wide* — 0\n3-1 feet wide — 5\n11-7 inches wid — 0\n6-2 inches wide — 15\nLess than 2 inches wide — 20\n* No Acrobatics check is needed to move across these surfaces unless a DC modifier (see the table below) increases the DC to 10 or higher.\n\nCircumstance* — DC Modifier\nSlightly obstructed (gravel, sand) — +2\nSeverely obstructed (cavern, rubble) — +5\nSlightly slippery (wet) — +2\nSeverely slippery (icy) — +5\nSlightly sloped (<45 degrees) — +2\nSeverely sloped (>45 degrees) — +5\nSlightly unsteady (rough spaceflight) — +2\nModerately unsteady (jostled spacecraft) — +5\nSeverely unsteady (earthquake) — +10\n* These circumstances apply to the balance and tumble tasks of Acrobatics and the jump task of Athletics.\n\nEscape\n\nYou can use Acrobatics to escape from grapples, pins, and restraints. Attempting to escape from a grapple or pin is a standard action. On a success, you free yourself from the grapple or pin and no longer have the grappled or pinned condition. The DC to escape a grapple or pin is typically 10 + the grappler’s Kinetic Armor Class. Escaping from restraints can take 1 minute or more, depending on the type of restraint. The DC to escape from restraints is based on the nature of the restraints and sometimes the CR of the creature that did the binding (see the table below). You can take 20 on Acrobatics checks to escape from most restraints, but not on checks to escape grapples.\n\nCircumstance — DC\nGrappled or pinned — 10 + grappler’s KAC\nRestrained by bindings/rope — 20 + 1-1/2 × opponent’s CR\nRestrained by manacles — 30\n\nFly\n\nThe basic rules for flight and how to move while flying are found on page 259. Generally, you need to attempt an Acrobatics check while flying only if you attempt a difficult maneuver or are in dangerous wind conditions. Usually, these checks are attempted as part of a move action while flying. You receive a bonus or penalty to Acrobatics checks to fly depending on your maneuverability: a -8 penalty for clumsy maneuverability, no bonus for average maneuverability, or a +8 bonus for perfect maneuverability.\n\nThe following situations require Acrobatics checks and have consequences for failure. The DCs for such checks are based on the current wind and air conditions and other factors determined by the GM. You can’t take 20 on Acrobatics checks to fly.\n\nAvoid Falling Damage\n\n• If you are falling and you can fly, you can attempt an Acrobatics check as a reaction to negate the damage from the fall. If you fail, you fall normally. If you have perfect maneuverability, you can avoid falling damage automatically without attempting a check.\n\nFly in Dangerous Wind Conditions\n\n• The more violent the wind conditions, the more difficult it is to keep flying. In conditions of windstorm or higher (51+ mph; see page 400), you must attempt an Acrobatics check to stay aloft each time you move. If you fail this check, you cannot move. If you fail this check by 5 or more, you are blown 2d6 × 10 feet in the direction of the prevailing wind (or in a direction decided by the GM), and take 2d6 bludgeoning damage. You can’t take 10 on Acrobatics checks to fly in dangerous wind conditions.\n\nHover\n\n• Safe flight typically requires momentum. If you wish to stay in place, or hover, while flying, you must attempt an Acrobatics check as a move action. If you fail, you fall. If you have clumsy maneuverability, you cannot hover at all. If you have average maneuverability and at least 5 ranks in Acrobatics or if you have perfect maneuverability, you can hover automatically without attempting a check; this does not require a move action.\n\nThe DCs for Acrobatics checks to fly are based on the prevailing wind conditions. The following chart provides the base DCs for air conditions, whether an Acrobatics check is required to fly in those air conditions, and whether a creature can take 10 on an Acrobatics check to fly. These wind conditions typically represent fairly clear skies and consistent wind speeds. The DC increases by as much as 5 for choppy wind or airborne debris, or 10 for both.\n\nWind Conditions — DC — Check  Required?  — TAKE 10?\nLight to moderate (0-20 mph) — 15 — No — Yes\nStrong (21-30 mph) — 17 — No — Yes\nSevere (31-50 mph) — 19 — No — Yes\nWindstorm (51-74 mph) — 27 — Yes — No\nHurricane force (75-174 mph) — 33 — Yes — No\nTornado force (175+ mph) — 39 — Yes — No\n\nTumble\n\nAs long as you do not have the encumbered or overburdened condition (see pages 275-276), you can use Acrobatics to move through a space threatened by an enemy or enemies without provoking attacks of opportunity from them. Tumbling is a move action, and you move at half speed. The DC to move through an opponent’s threatened area is 15 + 1-1/2 × the opponent’s CR. If multiple opponents are threatening the same space, you attempt one check with a DC based on the opponent with the highest CR, and the DC increases by 2 for each additional opponent beyond the first.\n\nYou can also tumble directly through an opponent’s space; the DC is 20 + 1-1/2 × the opponent’s CR. If you fail this check, you stop moving adjacent to your opponent and provoke an attack of opportunity.\n\nIf you attempt to move through multiple threatened spaces or opponents’ spaces during the same round, you must succeed at a check for each space, and the DC of each check beyond the first increases by 2. For example, if you tumble through a space threatened by two CR 1 creatures and a CR 2 creature, the DC = 15 + 3 + 2 + 2 = 22. If you then tumble through the space of the CR 2 creature, the DC = 20 + 3 + 2 = 25.\n\nIn all of these cases, the DC is modified by the same environmental circumstances that apply to the balance task of Acrobatics (see page 135). If you fail the check, you provoke attacks of opportunity as normal. If you want to move at full speed while tumbling, you take a -10 penalty to the check. You can use Acrobatics to tumble while prone, but you can move only 5 feet as a full action and take a -5 penalty to the check.\n\nUse the following base DCs for Acrobatics checks to tumble.\n\nSituation — DC*\nMove through a threatened area — 15 + 1-1/2 × opponent’s CR\nMove through an enemy’s space — 20 + 1-1/2 × opponent’s CR\n* The DC increases by 2 for each additional threatened space or opponent’s space you move through in 1 round.',
					summary:
						'You can keep your balance while traversing narrow or treacherous surfaces. You can also dive, flip, jump, and roll to avoid attacks and overcome obstacles.',
					compset: 'Skill',
					skRanks: 1,
					skClassSkillBon: 3,
					stAbScModifier: 3,
					stNet: 7,
					AbScUsed: 'asDex',
				},
				'skAthletics.61': {
					name: 'Athletics',
					description:
						"You can scale vertical surfaces, leap over obstacles, and swim.\n\nClimb\n\nAs part of a move action, you can use Athletics to climb up, down, or across a slope, a wall, or another steep incline. You can even climb on a ceiling, provided it has handholds, but you cannot climb on a perfectly smooth surface. On a successful check, you move at half your land speed across such a surface. If you fail the check by 4 or less, you make no progress. If you fail by 5 or more, you fall. You can’t take 20 on an Athletics check to climb. You need at least two hands to climb, but you can cling to a wall with one hand while you cast a spell, shoot a small arm, or take some other action that takes only one hand. While climbing or clinging to a wall, you are flat-footed. If you have a climb speed (see page 259), you receive a +8 bonus to Athletics checks to climb and don’t need to attempt Athletics checks to climb except in hazardous circumstances.\n\nThe DCs for Athletics checks to climb are based on the object being climbed, but can also be adjusted based on environmental circumstances such as gravity, winds, and surface conditions. Such modifiers are cumulative; use all that apply.\n\nObject Being Climbed — DC\nA slope of more than 45 degrees, a ladder, or a knotted rope with a wall to brace against — 5\nAn unknotted cable or rope with a wall to brace against, or a knotted rope without a wall to brace against — 10\nA rough surface or a wall with adequate handholds, like a natural rock surface, a cavern wall, or an artificial wall with cabling — 15\nAn unknotted cable or rope without a wall to brace against — 15\nA ledge from which you are dangling by your hands — 15\nAn uneven surface with narrow handholds, like a stone or brick wall — 20\nA relatively smooth surface with occasional handholds, like a space station wall or an ice wall — 25\nAn overhang or a ceiling with handholds only — 30\nA perfectly smooth surface — -\n\nCircumstance — DC Modifier\nBracing against two opposite walls — -10\nClimbing a corner or bracing against perpendicular walls — -5\nClimbing in zero or low gravity — -5\nClimbing in heavy gravity* — +5\nWet or slightly slippery walls — +2\nIcy or severely slippery walls* — +5\n\nJump\n\nAs part of a move action, you can use Athletics to horizontally or vertically jump a distance no greater than your remaining amount of movement. If you take a 10-foot running start just prior to the jump attempt, the DC is equal to the number of feet you are attempting to jump horizontally, or four times the number of feet you are attempting to jump vertically. If you do not take a running start, the DC of the check doubles. The DC is modified by the same environmental circumstances that apply to Acrobatics checks to balance (see page 135). If you fail the check, you fall. If you fail by 5 or more, you fall prone even if you don’t take any damage from the fall. Creatures with a land speed of 35 feet or more gain a +4 bonus to Athletics checks to jump. This bonus increases by 4 for every 10 by which a creature's land speed exceeds 40 feet. You can’t take 20 on Athletics checks to jump.\n\nSwim\n\nAs part of a move action, you can use Athletics to swim. On a successful check, you move half your land speed through water and similar fluids. If you fail the check by 4 or less, you make no progress. If you fail by 5 or more, you sink beneath the surface or sink deeper, and you must hold your breath or begin drowning (see page 404). If you do not have a swim speed (see page 259), for each hour you swim, you must succeed at a DC 20 Athletics check or take 1d6 nonlethal damage from fatigue. If you have a swim speed, you receive a +8 bonus to all Athletics checks to swim and don’t need to attempt Athletics checks to swim except in hazardous circumstances (see the table below).\n\nThe DCs for Athletics checks to swim are based on the prevailing conditions, but can also be adjusted based on environmental circumstances such as currents or the presence of debris. Such modifiers are cumulative; use all that apply.\n\nEnvironmental Conditions — DC\nCalm — 10\nRough — 15\nStormy* — 20\nMaelstrom* — 30\n* Unless you have a swim speed, you can’t take 10 on an Athletics check to swim in stormy or maelstrom water, even if you’re not otherwise threatened or distracted.\n\nCircumstance — DC Modifier\nLight debris or disruption — +2\nHeavy debris or disruption* — +5\nSwimming with a current* — +5\nSwimming against a current* — +10\nSwimming against a jet of liquid or a strong current* — +15\n* Hazardous circumstance; creatures with a swim speed must attempt a check in these conditions.",
					summary:
						'You can scale vertical surfaces, leap over obstacles, and swim.',
					compset: 'Skill',
					skRanks: 1,
					skClassSkillBon: 3,
					stAbScModifier: 4,
					stNet: 8,
					AbScUsed: 'asStr',
				},
				'skBluff.62': {
					name: 'Bluff',
					description:
						"You can use words and actions to create distractions, misdirect your opponents, tell convincing lies, and pass along secret messages.\n\nDiversion\n\nAs a move action, you can use Bluff to create a diversion. Your Bluff check is opposed by the Sense Motive check of the creature you are attempting to beguile. If you succeed, you can either attempt the hide task of Stealth as if you had cover or concealment, or you gain a +10 bonus to perform the palm an object task of Sleight of Hand (your choice). Occasionally, your Bluff check might be opposed by several creatures (for instance, if you are on a crowded space station promenade); in such cases, the GM might decide to roll several Sense Motive checks, and you succeed only against creatures with Sense Motive results lower than your Bluff result.\n\nFeint\n\nAs a standard action, you can use Bluff to feint in combat, enabling you to treat your opponent as flat-footed for your next attack against it before the end of your next turn. The DC of this check is equal to either 10 + your opponent’s total Sense Motive skill bonus, or 15 + 1-1/2 × the opponent’s CR, whichever is greater. You can’t feint against a creature that doesn’t have an Intelligence score, and you cannot take 10 or take 20 on a Bluff check to feint.\n\nLie\n\nYou can use Bluff to deceive someone or tell a convincing lie. A quick, simple lie in combat is part of combat banter; otherwise, telling a lie is at least a full action, but it can take longer if the lie is elaborate, as determined by the GM. If the creature is suspicious or attending carefully to your lie (as per the detect deception task for Sense Motive), the check is opposed by the Sense Motive check of the creature you are lying to; otherwise, the DC of this check is equal to 10 + the creature’s total Sense Motive skill bonus. If you succeed, the creature you are lying to believes you are telling the truth, at least until confronted with evidence to the contrary. The GM may determine that some lies are so improbable that it is impossible to convince someone they are true.\n\nThe DCs for Bluff checks to lie are adjusted based on the target's initial attitude toward you (see Diplomacy on page 139) as well as other circumstances determined by the GM (such as the plausibility of the lie).\n\nInitial Attitude — DC Modifier\nHostile — +10\nUnfriendly — +5\nIndifferent — +0\nFriendly — -5\nHelpful — -5\n\nPass Secret Message\n\nYou can use Bluff to pass a secret message to an ally without others understanding the message’s true meaning. Doing so in combat is part of combat banter. The DC of this check is 15 for simple messages and 20 for more complex messages, as determined by the GM. Those overhearing the message can attempt an opposed Sense Motive check to learn the gist of the message. You cannot take 20 on a Bluff check to pass a secret message.",
					summary:
						'You can use words and actions to create distractions, misdirect your opponents, tell convincing lies, and pass along secret messages.',
					compset: 'Skill',
					AbScUsed: 'asCha',
				},
				'skComputers.63': {
					name: 'Computers',
					description:
						"You can operate, manipulate, and hack into computer systems. If you don’t have physical access to a computer system’s user interface, you must use a hacking kit to access and manipulate the system. Details of computers themselves begin on page 213.\n\nComputers are set up to give one or more authorized users “root access,” allowing them to access any information or function of the computer as a standard action, with no need for a Computers check. Firewalls can block off specific sections of a computer and grant different users root access to those sections.\n\nThe base DC for many of the tasks of the Computers skill is equal to 13 + (4 × the computer's tier). These DCs may be adjusted by the GM to reflect other circumstances.\n\nAccess Unsecured System\n\nAs a standard action, you can use Computers to access an unsecured computer system’s most basic functions. The DC to access the information or functions of a public computer with no countermeasures or firewalls is generally 10. Unlike other tasks of the Computers skill, you can attempt to access a system untrained if you take 20 on the task, requiring 2 minutes. Secured computer systems, and secured sections of an unsecured system, can be accessed by making a Computers check to hack a system (see page 139).\n\nCraft Computer\n\nIf you have enough ranks in Computers, you can build computers. See page 235 for the crafting rules.\n\nCreate or Detect Forgery\n\nYou can use Computers to forge official documents. This takes 1d4 minutes. The GM rolls the Computers check to create a forgery in secret, so you’re not sure how good your forgery is. This check is opposed by the Computers check of anyone who examines the document to determine its authenticity.\n\nThe DCs for Computers checks to detect a forgery are based on the type of forged document as well as other circumstances determined by the GM, as shown in the table below.\n\nCircumstance — DC Modifier\nDocument contradicts knowledge or orders — -2\nType of document is well known to examiner — -2\nType of document is unknown to examiner — +2\nExaminer only casually reviews document — +2\nForger has a sample of a similar document — +8\n\nDestroy or Repair System or Module\n\nYou can use Computers to repair a computer system or module that has been disabled, or destroy one that has been either removed or disabled by spending 10 minutes per tier of the computer system working on the computer. The DC is based on the tier of the computer system. If you are repairing a disabled module or system and you fail the check by 5 or more, you accidentally destroy the module or system. You can’t take 20 on a Computers check to destroy or repair a computer system.\n\nDetect Fake Shell\n\nIf you have access to a computer, but not root access, you may actually only have access to a fake shell (see page 217). If you succeed at the check, which takes a full action, you realize that you have accessed a fake shell. The DC is equal to the DC to hack the computer + 5 (see Table 7–22: Computer Tiers on page 214).\n\nDisable or Manipulate Module\n\nA character with root access to a computer can disable or manipulate a countermeasure or module as a standard action with a DC 10 Computers check. If you have access (but not root access) to a computer, you can attempt a Computers check to activate, add, disable, or manipulate any countermeasure or module. If you want to affect a countermeasure or module that is behind a firewall, you must first hack the system (see below) to gain access to it. Activating or disabling a countermeasure or module generally takes a standard action. Adding or removing a module generally takes 1 minute per tier of the computer. All of these tasks have a DC equal to the DC to hack the system. You cannot take 20 on a Computers check to disable or manipulate a module.\n\nGain Root Access\n\nIf you have access to a computer, you can attempt to upgrade your authorization to gain root access. This works similar to hacking the same computer, but the DC is 20 higher. In many cases it is impossible to gain root access, and every task beyond the computer’s basic functions must be attempted as a separate check to destroy, repair, disable, or manipulate modules or countermeasures. If a firewall has been set to have a different set of authorized users with root access, you must gain root access to it separately. Once you have root access to a computer, you can alter who else is granted root access with a successful Computers check to hack the system.\n\nHack System\n\nYou can use Computers to hack a computer system to which you don’t already have access. Hacking a computer system typically takes one full action per tier of the computer system. You can cut this time in half (to a minimum of one full action) for every 5 by which you increase the DC of the Computers check. If you succeed at the check, you gain access to any part of the computer that is not behind a firewall (see page 217). This allows you to use the basic functions of the computer), and to make further checks that require you to have access. Accessing parts of a computer behind a firewall requires an additional Computers check for each firewall.\n\nIf you fail a Computers check to hack a system, you might trigger a countermeasure, if one has been installed. If you take 20 on a Computers check to hack a system with countermeasures without first disabling or destroying them, the countermeasures are automatically activated.",
					summary:
						'You can operate, manipulate, and hack into computer systems.',
					compset: 'Skill',
					AbScUsed: 'asInt',
				},
				'skCulture.64': {
					name: 'Culture',
					description:
						'You are a student of the vast number of known cultures in the galaxy, and you have a deep and rich understanding of the undercurrents of cultures and language in general. Each time you take a rank in Culture, you learn to speak and read a new language. See page 41 for a list of common languages.\n\nDecipher Writing\n\nYou can use Culture to decipher writing in an unfamiliar language or a message written in an incomplete or archaic form. It takes at least 1 minute to decipher approximately 250 words of writing or fewer. The GM often rolls Culture checks to decipher writing in secret. If you succeed at the check, you understand the general content of the text. If you fail, you don’t understand the text. If you fail the check by 10 or more, you entirely misconstrue the meaning of the text. You can’t take 20 on a Culture check to decipher writing unless you are trained in the Computers skill and have access to an information network or downloaded data set. In this case, there is no chance of misconstruing the information presented in the writing.\n\nThe DCs for Culture checks to decipher writing are based on the complexity of the text as well as other circumstances determined by the GM.\n\nComplexity — DC\nSimple message — 20\nStandard text — 25\nIntricate, exotic, or very old writing — 30\n\nRecall Knowledge\nYou can use Culture to recall knowledge about a culture’s customs, laws, government, leaders, prominent inhabitants, legends, religion, history, and related topics (see page 133).',
					summary:
						'You are a student of the vast number of known cultures in the galaxy, and you have a deep and rich understanding of the undercurrents of cultures and language in general.',
					compset: 'Skill',
					AbScUsed: 'asInt',
				},
				'skDiplomacy.65': {
					name: 'Diplomacy',
					description:
						"You can persuade others to be friendly toward you, resolve conflicts and differences, and learn common knowledge and rumors floating around a settlement.\n\nChange Attitude\n\nWhen you interact socially with another creature, that creature has an initial attitude toward you. Attitudes fall into five categories (from worst to best): hostile, unfriendly, indifferent, friendly, and helpful. You can use Diplomacy to change a creature’s initial attitude to a more positive one, but at the risk of angering the creature and worsening its attitude toward you if you fail. This is a language-dependent ability. The creature must have an Intelligence of 3 or higher, and you must spend at least 1 minute interacting and conversing with the creature to change its attitude. The DC of this check is equal to either 10 + your opponent’s total Diplomacy skill bonus, or 15 + 1-1/2 × the opponent’s CR (or the encounter’s CR, if you are trying to change the attitude of a group of creatures), whichever is higher. The DC is modified by the creature’s initial attitude (see page 140) and other circumstances, as determined by the GM. If you succeed, the creature’s attitude improves by one category (for instance, a hostile creature becomes unfriendly). If you exceed the DC by 5 or more, you can choose to spend 10 more minutes interacting with the creature to improve its attitude by one additional category. If you fail the check by 5 or more, you anger the creature, and the creature’s attitude worsens by one category (for instance, a friendly creature becomes indifferent).\n\nAttacking a creature always worsens its attitude by one category for each attack made, and may have other consequences based on the creature’s current attitude.\n\nPositively affecting a creature’s attitude takes time. You typically can't use Diplomacy to positively change a creature’s attitude by more than one category (or two categories if you spend the extra time) within a 24-hour period, unless the GM decides otherwise or you have an ability that allows you to do so.\n\nThe five categories of initial attitude are described below, along with the effects of negatively changing each attitude.\n\nHostile\n\n• A hostile creature would rather attack you either physically or verbally, than civilly converse with you. Most enemies you meet are hostile. It’s often hard to talk diplomatically with hostile creatures, though it can be done remotely (via a communication device) or by avoiding combat with the creatures while persuading them to listen to reason. If you fail the Diplomacy check by 5 or more, you can’t attempt to change a hostile creature’s attitude again for 24 hours.\n\nUnfriendly\n\n• Unfriendly creatures are typically wary of you, or afraid you will try to hurt them if they aren’t careful or fail to keep you at bay. Unfriendly creatures become hostile when angered or attacked.\n\nIndifferent\n\n• Indifferent creatures take little notice of you, but hold no ill will against you. They don’t care about your plight, but may give you simple advice or directions. Most creatures you meet in everyday life or in settlements are indifferent. Indifferent creatures become unfriendly when angered or attacked.\n\nFriendly\n\n• Either due to a generally cheerful disposition or a predisposition to like you, friendly creatures treat you with kindness and respect. They may give you more-detailed advice or simple aid, but generally won’t go out of their way to be helpful. If angered or attacked, friendly creatures become indifferent and often try to avoid further contact with you if possible.\n\nHelpful\n\n• Helpful creatures are not only friendly, but desire to help you, within reasonable means. Helpful creatures typically give you more lengthy or difficult aid, or offer small services that are readily available to them. When angered or attacked, helpful creatures become friendly, but somewhat guarded, as they are often confused by such reactions to their generosity.\n\nThe DCs for Diplomacy checks to change attitudes are adjusted based on the creature’s initial attitude as well as other circumstances determined by the GM.\n\nInitial Attitude — DC Modifier\nHostile — +10\nUnfriendly — +5\nIndifferent — +0\nFriendly — -5\nHelpful — -*\n* You cannot improve a creature’s attitude above helpful.\n\nGather Information\n\nYou can use Diplomacy to gather information about a specific topic or individual. You must spend at least 1d4 hours canvassing people within a settlement or local region. If you succeed, you learn something about that topic or individual, though the GM may determine that some information is simply unknown to the local people.\n\nThe DCs for Diplomacy checks to gather information are based on the nature of the information being sought and may be adjusted by the GM to reflect other circumstances, such as bribes or gifts.\n\nInformation Sought — DC\nCommon facts or rumors — 10\nObscure or secret knowledge — 20 or more\nProminent or well-known individual — 5 + character’s CR\nAverage or ordinary individual — 10 + character’s CR\nMysterious or obscure individual — 15 + character’s CR",
					summary:
						'You can use this skill to persuade others to agree with your arguments, to resolve differences, and to gather valuable information or rumors from people. This skill is also used to negotiate conflicts by using the proper etiquette and manners suitabl',
					compset: 'Skill',
					AbScUsed: 'asCha',
				},
				'skDisguise.66': {
					name: 'Disguise',
					description:
						'You are able to change your appearance to blend in and deceive others, whether to infiltrate\n\nChange Appearance\n\nYou can use Disguise to change your appearance with 1d3 × 10 minutes of work with a disguise kit, by casting a spell such as disguise self, or by using a technological device such as a holoskin. The GM rolls the Disguise check in secret, so you’re not sure how good your disguise is. This check is opposed by the Perception check (see page 144) of anyone who might realize that you are not who you appear to be. If you are not drawing attention to yourself, other creatures do not usually get to attempt a Perception check to pierce your disguise. If creatures are being particularly alert for suspicious activity (such as security personnel on a starship or space station), it’s assumed that such observers are taking 10 on their Perception checks.\n\nThe effectiveness of your disguise depends on how much you’re changing your appearance. Without the aid of transformative magic or technology that allows you to do otherwise, you can use Disguise only to appear as a creature that is your size or one size category larger or smaller than you. This does not change your actual size or reach. Disguises are general-you cannot disguise yourself as a specific person.\n\nCertain magic spells, such as disguise self, grant you a +10 bonus to Disguise checks.\n\nThe DCs for Disguise checks are adjusted by the type of disguise as well as other circumstances determined by the GM. These modifiers are cumulative; use all that apply.\n\nDisguise — DC Modifier\nMinor details altered only — -5\nMajor feature altered — +2 to +5\nDisguised as a different race of the same creature type — +2 to +8\nDisguised as a different creature type — +10\nDisguised as a different size category — +10',
					summary: 'You are skilled at changing your appearance.',
					compset: 'Skill',
					AbScUsed: 'asCha',
				},
				'skEngineering.67': {
					name: 'Engineering',
					description:
						'You can identify, build, repair, or disable technological devices; assess the stability of structures and machinery; and properly arm and disarm explosives. If you don’t have an engineering kit when attempting an Engineering check, you take a -2 penalty to the check.\n\nArm Explosives\n\nYou can use Engineering to arm an explosive using a detonator (see page 218). This takes 1 minute to connect the detonator and set the explosive. The DC of this check is typically 10. If you fail the check, you can attempt to arm the explosive again. If you fail the check by 5 or more, you trigger the explosive prematurely.\n\nYou can also attempt to build an explosive more difficult to disarm. To do so, choose a target disarm DC (the DC should be in an increment of 5, with a minimum DC of 15). This DC becomes your target DC to arm the explosive as well as the DC to disarm the explosive (see Disable Device below).\n\nAssess Stability\n\nYou can use Engineering to assess a structure or a piece of machinery to determine its stability, usability, and structural weak points. This takes 1 minute or more, and the DC is determined by the GM.\n\nUse the following base DCs for Engineering checks to assess stability. These DCs can be adjusted by other circumstances such as the complexity of the structure and damage to the structure, as determined by the GM.\n\nTask — DC\nAssess stability — 15\nDetermine structural weak point — 20\n\nCircumstance — DC Modifier\nSimple structure (rope bridge or unstable ceiling) — -5\nComplex structure (suspension bridge or space station wall) — +5\nObvious damage — -5\nSlight but consequential damage — +5\nIntentional sabotage — +10\n\nCraft Tech Item\n\nIf you have enough ranks in Engineering, you can create technological devices or items (including computers). See page 235 for the crafting rules.\n\nDisable Device\n\nYou can use Engineering to disable a lock, a trap, or a mechanical or technological device, or to disarm an explosive, as long as the device is unattended and you can access it. The amount of time this takes depends on the complexity of the device but typically requires at least one full action. The DC of the check is determined by the GM and is based on the complexity of the device. For extremely complex devices or systems, the GM might require multiple checks. The GM rolls the Engineering check to disable a device in secret, so you don’t necessarily know whether your attempt has succeeded or failed. If you succeed, you disable the device. If you fail the check and discover your error, you can attempt to disable the device again. If you fail the check by 5 or more, something goes wrong. If the device is an explosive or a trap, you trigger it. If you are attempting some sort of sabotage, you think the device is disabled, but it still works normally.\n\nYou can also use the disable device task to rig a device to work normally for a while, and then become disabled sometime later. This increases the DC of the check by 5. If you want to leave no trace of your tampering, the DC increases by an additional 5. If you succeed at the check, you can rig the device to become disabled up to 1 round later for each rank of Engineering you have. If you fail the check by 5 or more, your efforts have the same effect as if you were merely attempting to disable the device.\n\nDue to the danger, you cannot take 20 on an Engineering check to disable a device.\n\nThe DC for an Engineering check to disable a device is based on the complexity of the device. The following chart provides base DCs by complexity, examples of such devices, and the time it takes to disable such devices. The GM can adjust these DCs and times to reflect other circumstances. Systems with redundancies or similar safety measures could have DCs 1 to 5 higher than those listed.\n\nDevice — Example — Time — DC\nSimple device — Jam a door — 1 round — 10\nTricky device — Sabotage a simple propulsion system — 1d4 rounds — 15\nDifficult device — Disarm or reset a sentry turret or a similar trap — 2d4 rounds — 20\nComplex device — Disarm an explosive or a security system from a control panel or similar device — 2d4 rounds — 25\nEquipment — Disable an armor upgrade, powered armor, or a weapon — 2d4 rounds — 15 + 1-1/2 × item’s level\nSimple lock — - — 1 round — 20\nAverage lock — - — 1 round — 25\nGood lock — - — 1 round — 30\nSuperior lock — - — 1 round — 40\n\nIdentify Creature\n\nYou can use Engineering to identify constructs with the technological subtype such as robots (see page 133).\n\nIdentify Technology\n\nYou can use Engineering to identify the properties and uses of technological and hybrid items items and devices such as starships and weapons, as well as alien technology. Generally, a check is not required to identify relatively simple technological items that are commonly available in the Pact Worlds (such as those items presented in Chapter 7). You can take 20 on an Engineering check to identify technology, but only if you have a means of researching, such as access to an information network or downloaded data set.\n\nThe DCs for Engineering checks to identify technology are based on the item’s rarity.\n\nItem Rarity —  DC\nCommon, complex technology (Pact Worlds starships or items) — 5 + 1-1/2 × item’s level\nLess common technology (non-Pact Worlds starships or items) — 10 + 1-1/2 × item’s level\nRare, ancient, or alien tech — 15 + 1-1/2 × item’s level\n\nRepair Item\n\nYou can use Engineering to repair a mechanical, technological, or hybrid object or piece of equipment, as long you have access to it. The amount of time this takes typically depends on the complexity of the object. You can repair an object or piece of equipment you crafted in half the usual time. The DC of the check is determined by the GM and based on the complexity of the object. If you succeed, you restore a number of Hit Points equal to the result of your Engineering check. If you fail the check by 10 or more, you damage the object further, dealing 1d4 damage to it; this damage can’t reduce an item to fewer than 1 HP.\n\nIf the object or piece of equipment is damaged but not broken, you can repair it at no cost. If it is broken but not destroyed, you must spend 10 UPBs per item level (see page 233; assume a simple item has an item level of 1) each time you attempt to repair it. A destroyed object or piece of equipment can’t be repaired with the Engineering skill.\n\nYou can’t take 20 on an Engineering check to repair an item or object.\n\nThe DC for an Engineering check to repair an item is based on the complexity of the object. The following chart provides base DCs by complexity and examples of such items. The GM may adjust these DCs and times to reflect other circumstances.\n\nItem —  Example —  Time —  DC\nSimple —  Door or wall — 10 minutes —  15\nComplex —  Computer console — 30 minutes —  20\nEquipment —  Weapon or suit of armor —  1 hour —  15 + 1-1/2 × item’s level',
					summary:
						'You can identify, build, repair, or disable technological devices; assess the stability of structures and machinery; and properly arm and disarm explosives.',
					compset: 'Skill',
					stNet: -2,
					stMiscMod: -2,
					AbScUsed: 'asInt',
				},
				'skIntimidate.68': {
					name: 'Intimidate',
					description:
						'You can rattle your foes or bully them to do what you want with verbal threats or displays of prowess.\n\nBully\n\nYou can use Intimidate to bully a creature to temporarily change its attitude to helpful (see Diplomacy on page 139). This is a language-dependent, sense-dependent ability. You must spend at least 1 minute conversing with the creature. The DC of this check is equal to either 10 + your opponent’s total Intimidate skill bonus, or 15 + 1-1/2 × the opponent’s CR, whichever is greater. If you succeed, the creature gives you information it has that you want, takes actions that do not endanger it, or grants limited assistance that you request, but does so under duress. Such a change in attitude lasts for 1d6 × 10 minutes. At the end of this time, the creature’s attitude toward you becomes unfriendly. If you fail the check by 5 or more, the creature’s attitude becomes unfriendly, or hostile if it was already unfriendly. If the creature becomes unfriendly due to a failed check, it is likely to try to deceive you or otherwise hinder your goals.\n\nDemoralize\n\nAs a standard action, you can use Intimidate to cause a creature within 30 feet of you to become shaken for a number of rounds. This is a sense-dependent ability. The DC of this check is equal to either 10 + your opponent’s total Intimidate skill bonus, or 15 + 1-1/2 × the opponent’s CR, whichever is greater. If you succeed, the target is shaken for 1 round. The duration increases by 1 round for every 5 by which the result of your check exceeds the DC.',
					summary:
						'You can use this skill to frighten your opponents or to get them to act in a way that benefits you. This skill includes verbal threats and displays of prowess.',
					compset: 'Skill',
					skRanks: 1,
					skClassSkillBon: 3,
					stNet: 4,
					AbScUsed: 'asCha',
				},
				'skLifeScience.69': {
					name: 'Life Science',
					description:
						'You are educated in the scientific study of living things, from the smallest organisms to the largest biological systems.\n\nCraft Drug, Poison, or Medicinal\n\nIf you have enough ranks in Life Science, you can create drugs, poisons, and medicinals. See page 235 for the crafting rules.\n\nCraft Food or Drink\n\nIf you have enough ranks in Life Science, you can create food and drink items. See page 235 for the crafting rules.\n\nIdentify Creature\n\nYou can use Life Science to identify aberrations, animals, humanoids, monstrous humanoids, oozes, plant creatures, and vermin (see page 133).\n\nRecall Knowledge\nYou can use Life Science to recall knowledge about bioengineering, biology, botany, ecology, genetics, xenobiology, zoology, and other fields of biological science (see page 133).',
					summary:
						'You are educated in the scientific study of living things, from the smallest organisms to the largest biological systems.',
					compset: 'Skill',
					AbScUsed: 'asInt',
				},
				'skMedicine.70': {
					name: 'Medicine',
					description:
						'You have knowledge of the biology of many species and can treat a number of different types of wounds and ailments. The DCs of most Medicine tasks are based on the type of equipment used (see Chapter 7 for that information).\n\nFirst Aid\n\nAs a standard action, you can use Medicine to stop bleed damage or administer first aid to a dying creature that you can touch. The DC of this check is 15. If you succeed at the check, the creature stops dying and becomes stable, or the bleed damage ends. Unlike with other tasks of the Medicine skill, you can attempt the first aid task untrained. You can’t take 20 on a Medicine check to administer first aid.\n\nLong-Term Care\n\nYou can use Medicine to provide long-term care to a living, wounded creature. This can take a day or more, requires a medical lab or a medical bay on a starship, and has a DC of 30. If you succeed at the check, the patient recovers Hit Points and ability score damage (as well as recovers from poison states) at twice the normal rate. If you exceed the DC by 10 or more, the patient recovers Hit Points and ability score damage (as well as recovers from poison states) at three times the normal rate. You can tend as many as six patients at a time, attempting a check for each one each day to determine the rate of healing. You cannot take 20 on a Medicine check to provide long-term care.\n\nLong-Term Stability\n\nYou can use Medicine to tend a creature that is unconscious but stable, ensuring that it doesn’t die while it remains unconscious. Each hour, before the unconscious creature attempts its Constitution check, you can attempt a DC 15 Medicine check. If you succeed, the unconscious creature gains a +2 bonus to its Constitution check and, if its Constitution check result is less than 10, can treat its result as if it were 10. See Long-Term Stability on page 251 for more information.\n\nTreat Deadly Wounds\n\nYou can use Medicine to restore Hit Points to a living, wounded creature. This takes 1 minute, and the DC is based on the medical equipment used. If you succeed at the check, you restore 1 Hit Point per level or CR of the creature you are treating. If you exceed the DC by 5 or more, you add your Intelligence modifier to the amount healed. A creature can receive this treatment only once every 24-hour period, unless it is delivered in a medical lab. Most medical labs allow you to treat a creature’s deadly wounds at least twice per day.\n\nTreat Disease\n\nYou can use Medicine to treat a creature suffering from a disease. This takes 10 minutes and requires a medkit, a medical lab, or a medical bay on a starship. Every time the diseased creature attempts a saving throw against the disease, you can attempt a Medicine check. If your result exceeds the DC of the disease, the creature receives a +4 bonus to its saving throw against the disease.\n\nTreat Drugs or Poison\n\nAs a standard action, you can use Medicine to treat a drugged or poisoned creature. This requires a medkit, a medical lab, or a medical bay on a starship. Every time the creature attempts a saving throw against the drug or poison, you can attempt a Medicine check. If your result exceeds the DC of the drug or poison, the character receives a +4 bonus to its saving throw against the drug or poison.',
					summary:
						'You have knowledge of the biology of many species and can treat a number of different types of wounds and ailments.',
					compset: 'Skill',
					AbScUsed: 'asInt',
				},
				'skMysticism.71': {
					name: 'Mysticism',
					description:
						'You are educated in the fields of magic, religion, the planes, and spellcasting, and so can identify magic items and spells and make magic items yourself.\n\nCraft Magic Item\n\nIf you have enough ranks in Mysticism, you can create magic items. See page 235 for the crafting rules.\n\nDisable Magic Device\n\nYou can use Mysticism to disable a magical trap or other magical item. This functions as the disable device task of the Engineering skill, and the DC of the check is based on the trap itself. You can’t take 20 on a Mysticism check to disable a magic device.\n\nIdentify a Spell Being Cast\n\nIf you can clearly observe a spell being cast, you can use Mysticism to identify the spell. The DC of this check is equal to 10 + 5 × the level of the spell being cast. This does not require an action. You can’t take 10 or 20 on a Mysticism check to identify a spell.\n\nIdentify Creature\n\nYou can use Mysticism to identify constructs with the magical subtype, dragons, fey, magical beasts, outsiders, and undead (see page 133).\n\nIdentify Magic Item\n\nAs part of the action to cast detect magic, you can use Mysticism to identify the properties and command words of magic and hybrid items. The DC of this check is equal to 15 + 1-1/2 × the item level. You can usually attempt a Mysticism check to identify a magic item only once per 24-hour period; further attempts within that period fail. However, casting an identify spell allows you to attempt a second check in the same 24-hour period and grants you a +10 insight bonus to the check. If you have the time, you can take 20 to attempt another check to identify a magic item in the same 24- hour period, but only if you can perform research, such as with access to an information network or downloaded data set.\n\nRecall Knowledge\nYou can use Mysticism to recall knowledge about alchemical theory, arcane symbols, deities, magic traditions, the planes, religious traditions and symbols, and related topics (see page 133).\n\nRepair Item\n\nYou can use Mysticism to repair a magical or hybrid piece of equipment, as long you have access to it. This typically takes 1 hour. You can repair a piece of equipment you crafted in half the usual time. The DC of the check is equal to 15 + 1-1/2 × item level. For a magical object without an item level, the GM determines the DC and the amount of time it takes to repair the object based on the object’s complexity (see the repair item task of the Engineering skill on page 142 for guidelines). If you succeed, you restore a number of Hit Points equal to the result of your Mysticism check. If you fail the check by 10 or more, you damage the item further, dealing 1d4 damage to it; this damage can’t reduce an item to fewer than 1 HP.\n\nIf the piece of equipment is damaged but not broken, you can repair it at no cost. If it is broken but not destroyed, you must spend 10 UPBs per item level (see page 233) each time you attempt to repair it. A destroyed piece of equipment can’t be repaired with the Mysticism skill.\n\nYou can’t take 20 on a Mysticism check to repair an item or an object.',
					summary:
						'You are educated in the fields of magic, religion, the planes, and spellcasting, and so can identify magic items and spells and make magic items yourself.',
					compset: 'Skill',
					stAbScModifier: 2,
					stNet: 2,
					AbScUsed: 'asWis',
				},
				'skPerception.72': {
					name: 'Perception',
					description:
						'You can use all of your senses (hearing, taste, touch, sight, and smell) to notice danger, pick out fine details, and search for hidden objects or creatures.\n\nNotice\n\nYou can use Perception to notice things happening around you. This is the most basic task of the Perception skill. It can be used for a variety of reasons determined by the GM. You might attempt a Perception check to see if you can act in a surprise round, to spot something important out of the corner of your eye, or to realize there are hidden creatures nearby (though you can’t notice a creature that is invisible unless it makes itself known; see page 264). A Perception check to notice usually does not involve taking an action, though you must be conscious and have the use of at least some of your senses to do so. The GM determines the DC. You cannot take 20 on a Perception check to notice things.\n\nThe DCs for Perception checks to notice things are determined by the GM based on the circumstances and may be adjusted to reflect other conditions. See the search task below for a chart with some example circumstances and their typical DCs.\n\nPierce Disguise\n\nAs a move action, you can use Perception to recognize that a creature has changed its appearance. Sometimes, if you are being particularly alert for those in the area who might be in disguise, the GM might allow you to do this without taking an action. This check is opposed by a Disguise check attempted by the disguised creature. If you succeed, you realize the creature is disguised and not who it seems, but not necessarily who or what the disguised creature is beneath that disguise. If the disguised creature is impersonating a particular individual that you know, the GM might grant you a bonus to your Perception check.\n\nDivination magic or scanners that allow you to see through illusions or holograms do not penetrate mundane and low-tech disguises, but they can negate illusory or holographic components of a disguise.\n\nThe DCs for Perception checks to pierce a disguise are adjusted according to how familiar the observer is with the particular individual the disguised creature is masquerading as, as well as other circumstances determined by the GM.\n\nFamiliarity — DC Modifier\nIntimate — -10\nClose friends — -8\nFriends or associates — -6\nRecognizes on sight — -4\n\nSearch\n\nAs a move action, you can use Perception to search for something in particular, such as finding an invisible creature that has made itself known or a hidden creature you know is in the area, or looking for nearby traps or hazards. You can also search an area to find anything of interest that might be hidden or is otherwise not immediately noticeable, such as concealed cargo compartments or hidden treasure. In that case, it takes 1 minute to search an area no more than 20 feet by 20 feet (or smaller, if the GM rules the area is particularly cluttered or complex). The DC is determined by the Stealth check of the creature, by the trap or hazard involved, or by the GM. If you are not in combat, you can take 20 on a Perception check to search.\n\nThe DCs for Perception checks to search may be adjusted by the GM based on the circumstances and to reflect other conditions. The following chart provides some example circumstances and their typical DCs.\n\nCircumstance — DC\nHear the sound of battle — 0\nDetect a strong smell — 0\nHear the details of a conversation — 0\nNotice a creature in plain sight — 0\nDetermine whether food is spoiled — 5\nHear the sound of a Small or Medium creature walking — 10\nHear the details of a whispered conversation — 15\nFind a typical unmarked cargo hatch — 15\nHear the sound of an automatic door opening — 20\nFind a typical secret compartment — 20\nHear a pistol being drawn — 20\nSense a creature burrowing 5 feet below you — 25\nNotice someone picking your pocket — Opposed by Sleight of Hand\nNotice a creature using Stealth — Opposed by Stealth\nFind a hidden trap — Varies by trap',
					summary:
						'You can use all of your senses (hearing, taste, touch, sight, and smell) to notice danger, pick out fine details, and search for hidden objects or creatures.',
					compset: 'Skill',
					stAbScModifier: 2,
					stNet: 2,
					AbScUsed: 'asWis',
				},
				'skPhysicalScience.73': {
					name: 'Physical Science',
					description:
						'You are educated in the scientific study of non-living systems, from the tiniest atoms to the largest celestial bodies.\n\nCraft Drug, Poison, or Medicinal\n\nIf you have enough ranks in Physical Science, you can create drugs, poisons, and medicinals. See page 235 for crafting rules.\n\nRecall Knowledge\nYou can use Physical Science to recall knowledge about astronomy, chemistry, climatology, geography, geology, hyperspace, meteorology, oceanography, physics, and other fields of natural science (see page 133).',
					summary:
						'You are educated in the scientific study of non-living systems, from the tiniest atoms to the largest celestial bodies.',
					compset: 'Skill',
					AbScUsed: 'asInt',
				},
				'skPiloting.74': {
					name: 'Piloting',
					description:
						'You know how to drive vehicles, pilot starships, and navigate.\n\nFire Starship Guns\n\nWhen attempting a gunnery check during starship combat (see page 320), you can use either your ranks in Piloting or your base attack bonus to calculate the attack roll.\n\nNavigate\n\nYou can use Piloting to navigate or astrogate. This lets you direct your vehicle or ship in your desired heading and to plot longer courses. Plotting a course to a star system you have visited frequently usually requires a successful DC 10 Piloting check and takes 10 minutes. Plotting a course to a less familiar star system is more difficult and requires information about the destination system; navigation is also more difficult if you are currently lost.\n\nIf you fail the check to chart a course between star systems by 9 or less, you realize that you have plotted a faulty course and must attempt the check again before you can make the journey. If you fail the check by 10 or more, you aren’t aware that your calculations are erroneous, and it takes longer than normal for you to reach your destination (usually 1d6 additional days for Drift travel). At the GM’s discretion, you might instead arrive in an unfamiliar star system (plotting a course from there to your actual destination usually requires a successful DC 25 Piloting check), or when you arrive at your intended destination, your starship’s engines may have gained the glitching critical damage condition (see page 321).\n\nYour familiarity with a region of space or a planet determines the DC of Piloting checks to navigate or astrogate. The GM can modify these DCs (usually by 5 to 10) based on the amount of information available about your starting location and destination, and whether the location is particularly difficult to navigate (such as a trackless desert or a strange nebula).\n\nFamiliarity — DC\nFrequently visited or home base — 10\nSeldom visited — 15\nUnfamiliar — 25\n\nPilot a Starship\n\nIf you take the pilot role in starship combat, you use your Piloting skill to maneuver, attempt stunts, and otherwise fly the starship. Full details appear on page 324.\n\nPilot a Vehicle\n\nWhen piloting a vehicle (see page 278), you attempt Piloting checks to safely race at full speed, pull off maneuvers, engage in vehicular combat, and maneuver in a chase. More advanced vehicles are harder to pilot, so the DCs of most checks for piloting a vehicle increase with the vehicle’s item level.',
					summary:
						'You know how to drive vehicles, pilot starships, and navigate.',
					compset: 'Skill',
					skRanks: 1,
					skClassSkillBon: 3,
					stAbScModifier: 3,
					stNet: 7,
					AbScUsed: 'asDex',
				},
				'skSenseMotive.75': {
					name: 'Sense Motive',
					description:
						'You can detect falsehoods and gain glimpses of the true intentions of creatures with which you interact.\n\nDetect Deception\n\nYou can use Sense Motive to determine whether something just said to you was a deception or lie. At any time, if you doubt something another creature is telling you, you can request the GM to allow you to attempt a Sense Motive check to determine whether it is deceiving you. Doing so in combat is part of combat banter; otherwise, it’s a move action. Your Sense Motive check is opposed by that creature’s Bluff check. If you succeed, you realize that you are being deceived or that a lie is being told, but not how it is untrue, nor does it let you know the truth. If you fail (or if no deception or lie is being made), you believe that the speaker doesn’t seem to be deceiving you. Failing the check by 5 or more may mean (at the GM’s discretion) you believe that a truthful statement contains deceptions or that a lie or deception is a truthful statement.\n\nDiscern Secret Message\n\nIf you overhear or otherwise intercept a secret message, you can use Sense Motive to learn the gist of its true meaning. Doing so in combat is part of combat banter. Your Sense Motive check is opposed by a Bluff check attempted by the creature passing the secret message. If you succeed, you learn the information contained in the secret message. If you fail (or if there is no secret message), you don’t detect any hidden meaning in the message. If you fail the check by 5 or more, you might infer false information, as determined by the GM. Often, the GM rolls these checks in secret and informs you of the results.\n\nSense Mental Effect\n\nYou can use Sense Motive to ascertain whether another creature within 30 feet is affected by a mental effect, even if the creature is unaware of the effect. You must spend at least 1 minute interacting with the creature. The DC of this check is typically 25, but it can be higher or lower based on how overt the manifestation of the mental effect is, as determined by the GM. Knowing that a creature is under a mental effect does not automatically determine the nature of the mental effect, though outward signs and the subtleties of behavioral change may provide enough clues to attempt an Intelligence-based skill check or an Intelligence check to determine the nature of the mental effect, at the GM’s discretion.',
					compset: 'Skill',
					stAbScModifier: 2,
					stNet: 2,
					AbScUsed: 'asWis',
				},
				'skSleightHand.76': {
					name: 'Sleight of Hand',
					description:
						'You can hide small objects, pick pockets, and accomplish other feats of manual dexterity without being noticed.\n\nEntertain\n\nYou can use Sleight of Hand to entertain an audience, as if you were using the earn a living task of the Profession skill.\n\nHide Object\n\nAs a standard action, you can use Sleight of Hand to hide a small object (including a small arm or a one-handed melee weapon with light bulk) on your body. The check is opposed by the Perception check of anyone observing you or searching your body. In the latter case, the searcher gains a +4 bonus to the check. Especially small objects or those created to be easy to hide can grant up to a +4 circumstance bonus to your Sleight of Hand check to hide an object on your person, as can compartments in clothing or armor made to facilitate such hiding. Retrieving a weapon or object hidden on your person is a standard action.\n\nPalm Object\n\nAs a standard action, you can use Sleight of Hand to palm a small object no larger than a small communicator or memory stick. The check is opposed by the Perception checks of anyone nearby who could notice the attempt. If you successfully use the Bluff skill to create a diversion, you gain a +10 bonus to this check (see Bluff on page 137). If you fail, you still palm the object, but not without being noticed by those whose Perception check results exceed your Sleight of Hand result. You can’t take 20 on a Sleight of Hand check to palm an object.\n\nPick Pocket\n\nAs a standard action, you can use Sleight of Hand to steal an object from another creature. The DC of this check is usually 20, but it can be modified by any precautions the object’s wearer has taken, as determined by the GM. Whether you succeed or fail, the object’s wearer can attempt an opposed Perception check against your Sleight of Hand result to notice the attempt. You cannot usually attempt this task during combat, and you can’t take 20 on a Sleight of Hand check to pick pockets.',
					summary:
						'You can hide small objects, pick pockets, and accomplish other feats of manual dexterity without being noticed.',
					compset: 'Skill',
					stAbScModifier: 3,
					stNet: 3,
					AbScUsed: 'asDex',
				},
				'skStealth.77': {
					name: 'Stealth',
					description:
						'You can stay hidden and move silently to avoid detection, allowing you to sneak past foes or strike from an unseen position.\n\nHide\n\nYou can use Stealth to hide if you have either cover or concealment (or a special ability that allows you to hide in plain sight), or if you have successfully created a diversion with the Bluff skill. You can attempt a Stealth check to hide either as a move action (if you are planning to stay immobile) or as part of a move action. If you move at a rate of half your speed or less, you take no penalty to your Stealth check. If you attempt to hide while moving more than half your speed or after creating a diversion with Bluff, you take a -10 penalty to your Stealth check; these penalties are cumulative if you do both. The check is opposed by the Perception checks of creatures in the area that might detect you. A creature that fails the opposed skill check treats you as if you had total concealment as long as you continue to have actual cover or concealment. A creature that succeeds at the opposed skill check either sees you or pinpoints you (see page 260) in situations when you have total concealment. If you lose actual cover or concealment during your turn, you can attempt to stay hidden, but only if you end your turn within cover or concealment.\n\nInvisibility and Hiding\n\n• If you are invisible or benefit from total concealment, you gain a +40 bonus to your Stealth check as long as you remain immobile. You are considered immobile if it is your turn and you have not yet moved or if you have not moved since the start of your last turn. If you are invisible but not immobile, you instead gain a +20 bonus to your Stealth check. Typically, a creature cannot attack you if you are invisible or have total concealment unless the creature pinpoints you with a successful Perception check. (Invisible creatures can still be heard, smelled, and felt, and might do something to make themselves known to those who succeed at Perception checks; see Invisible on page 264 in Chapter 8.) Even then, the attacking creature has a 50% miss chance against the pinpointed creature.\n\nAttacking from Hiding\n\n• If you are successfully hiding from a creature, that creature is considered flat-footed for the purpose of your first attack from hiding. If you remain invisible after your first attack, that creature is considered flat-footed against your attacks until it succeeds at a Perception check to locate you or until you become visible.\n\nSniping\n\nIf you have already successfully used Stealth to hide from a creature that is at least 10 feet away, you can briefly pop out of cover or concealment and make a single ranged attack against that creature. As long as you can reenter cover or concealment, you can attempt a Stealth check to hide again as part of that attack with a -20 penalty.',
					summary:
						'You can stay hidden and move silently to avoid detection, allowing you to sneak past foes or strike from an unseen position.',
					compset: 'Skill',
					stAbScModifier: 3,
					stNet: 3,
					AbScUsed: 'asDex',
				},
				'skSurvival.78': {
					name: 'Survival',
					description:
						'You can survive in and make your way safely through almost any kind of wilderness, follow trails and tracks, deal with wild animals, and ride tamed ones.\n\nUse the following base DCs for many of the listed tasks of the Survival skill. These DCs may be adjusted by the GM to reflect other circumstances.\n\nTask — DC\nEndure severe weather — 15\nHandle an animal — 10 + 1-1/2 × CR of animal\nLive off the land — 10\nOrienteering Orienteering — 15\nPredict weather — 15\nRear a wild animal — 15 + 1-1/2 × CR of animal\n\nEndure Severe Weather\n\nYou can use Survival to better withstand the effects of severe weather. Typically, one check determines the success of your efforts for a single day. If you succeed at the check, you gain a +2 bonus to Fortitude saving throws against severe weather while moving up to half your overland speed, or a +4 bonus if you remain stationary and build a temporary shelter. You can grant this bonus to one other creature for every 1 point by which your result exceeds the DC. You can’t take 20 on Survival checks to endure severe weather.\n\nFollow Tracks\n\nYou can use Survival to either find tracks or follow tracks you have found for 1 mile or until they become difficult to follow, whichever occurs first. Finding tracks requires a full action. If you move at half your speed or less, you take no penalty to your Survival check. You can move at your full speed with a -5 penalty to the check or at twice your normal speed with a -20 penalty to the check.\n\nThe base DCs for Survival checks to follow tracks depend on the surface and are adjusted based on prevailing conditions and the group being tracked; such modifiers are cumulative. The GM may further adjust DCs to reflect other circumstances such as the number of creatures being tracked, local gravity, and weather conditions.\n\nSurface — DC\nVery soft ground (fresh snow, thick dust, wet mud) — 5\nSoft ground (soft earth, drying mud) — 10\nFirm ground (fields, woods, thick rugs, dirty or dusty floors) — 15\nHard ground (bare rock, most flooring) — 20\n\nCondition — DC Modifier\nMultiple creatures in group being tracked — -1 per three creatures\nTime since tracks were made — +1 per 24 hours\nMoonlight — +3\nOvercast or moonless night — +6\nTracked group moves at half speed and hides trail — +5\n\nHandle an Animal\n\nAs a move action, you can use Survival to improve the attitude of an animal with an Intelligence score of 1 or 2. This functions just like a Diplomacy check to change a person’s initial attitude, but it is not language-dependent. A typical domesticated animal has a starting attitude of indifferent, while wild animals are usually unfriendly.\n\nLive Off the Land\n\nYou can use Survival to keep yourself and others fed in the wild by hunting and foraging, enabling you to move up to half your overland speed without needing food and water supplies. Typically, one check determines the success of your efforts for a single day. You can provide food and water for one other character for every 2 points by which the result of your check exceeds 10. In some cases, an environment may be so inhospitable (such as an airless asteroid) that it is impossible to live off the land. You can’t take 20 on Survival checks to live off the land.\n\nOrienteering\n\nOnce each hour while traveling through unfamiliar terrain and each time you move close to a natural hazard such as quicksand or patches of poisonous atmosphere, you can use Survival to keep from getting lost or to notice or avoid the hazard.\n\nPredict Weather\n\nYou can use Survival to predict the weather up to 24 hours in advance. You must spend at least 1 minute observing the surrounding area and its current weather patterns. You can predict the weather an additional day in advance for every 5 points by which your result exceeds 15. You can’t take 20 on Survival checks to predict weather.\n\nRear a Wild Animal (Trained Only)\n\nYou can use Survival to raise a wild animal from infancy so that it becomes domesticated. At the GM’s discretion, you might be able to use this task to rear wild creatures other than animals. Rearing a wild animal typically takes months or even years. If you succeed at the check at the end of this time, the animal is domesticated and has an initial attitude of friendly toward you. You can rear as many as three animals of the same kind at one time.\n\nRide a Creature\n\nYou can use Survival to ride an animal or another beast as a mount. The most typical actions while riding a creature don’t require checks. As a move action, you can either mount, ride (using the mount’s speed instead of yours), or dismount from a creature; you must use one hand to ride a creature. Saddling a creature typically takes at least 1 minute, but the process could take longer if you’re using an unusual saddle or mount.\n\nThe following actions do require Survival checks and can be performed only while mounted.\n\nControl Mount in Battle\n\n• You can attempt to control a mount not normally trained for combat while in battle. This is part of whatever action you are attempting to have the mount accomplish. If you fail the check, you lose that action.\n\nCover\n\n• As a swift action, you can drop down and hang alongside your mount, using it as cover. You can’t attack or cast spells while using your mount as cover. If you fail the check, you don’t gain the benefit of cover, and you can’t attack or cast until you pull yourself back up. In either case, pulling yourself back up takes a move action and doesn’t require a check.\n\nFast Mount or Dismount\n\nYou can attempt to mount or dismount from a creature as a swift action instead of a move action.\n\nFight from a Combat-Trained Mount\n\n• Each round you direct a mount trained for combat into battle, you must attempt a Survival check to ride as a swift action. If you succeed at the check, you can still make your own attacks as normal, along with any attacks the mount can make. If you fail the check, either you or your mount can make attacks, but not both.\n\nGuide with Knees\n\nAs part of a move action to ride, you can guide your mount with your knees, keeping your hands free. If you fail the check, you must still use one hand to guide your mount, dropping an item or changing grip if necessary.\n\nLeap\n\n• As part of a move action to ride, you can guide your mount to leap over an obstacle. If you succeed at the check, the mount must still succeed at an Athletics check to jump, but it can use your Survival bonus in place of its Athletics bonus, if that number is greater. If you fail the initial Survival check, you fall off the mount when it leaps and take the appropriate falling damage or 1d6 falling damage, whichever is greater.\n\nSoft Fall\n\n• As a reaction, you can reduce the damage you take from a fall off your mount (see page 400). With a successful check, you reduce the damage you take from the fall by 1d6.\n\nSpur Mount\n\n• As a part of a move action to ride, you can attempt to spur your mount to greater speeds. If you succeed at the check, the mount’s speed increases by 5 feet for that move action, but the mount takes 1d3 damage whether or not the check succeeds or fails. You can use this ability as often as you want, but if you fail the check by 5 or more, the mount becomes fatigued. You cannot spur a fatigued mount.\n\nStay Mounted\n\n• As a reaction, you can try to avoid falling off your mount when your mount rears or bolts unexpectedly.\n\nThe base DCs for Survival checks to ride a creature depend on the attempted action and apply to riding the most common types of creatures and animals. At the GM’s discretion, dangerous or exotic beasts or those ill-suited for use as mounts can increase the DC of Survival checks to ride them by anywhere from 2 to 10. If you ride a creature bareback, you take a –5 penalty to Survival checks to ride or control that mount.\n\nAction — DC\nControl mount in battle — 20\nCover Cover — 15\nFast mount or dismount — 20\nFight from a combat-trained mount — 10\nGuide with knees — 5\nLeap — 15\nSoft fall — 15\nSpur mount — 15\nStay mounted — 5',
					summary:
						'You can survive in and make your way safely through almost any kind of wilderness, follow trails and tracks, deal with wild animals, and ride tamed ones.',
					compset: 'Skill',
					stAbScModifier: 2,
					stNet: 2,
					AbScUsed: 'asWis',
				},
				'svFortitude.79': {
					name: 'Fortitude Save',
					description:
						'This save measures your ability to stand up to physical punishment or attacks against your vitality and health. Your Constitution modifier is applied to your Fortitude saving throw.',
					summary:
						'This save measures your ability to stand up to physical punishment.',
					compset: 'Save',
					stAbScModifier: 4,
					stNet: 6,
					stBaseBon: 2,
					AbScUsed: 'asCon',
				},
				'svReflex.81': {
					name: 'Reflex Save',
					description:
						'This save tests your ability to dodge area attacks and unexpected situations. Your Dexterity modifier is applied to your Reflex saving throw.',
					summary:
						'This save tests your ability to dodge area attacks and unexpected situations.',
					compset: 'Save',
					stAbScModifier: 3,
					stNet: 3,
					AbScUsed: 'asDex',
				},
				'svWill.80': {
					name: 'Will Save',
					description:
						'This save reflects your resistance to mental influence as well as many magical effects. Your Wisdom modifier is applied to your Will saving throw.',
					summary:
						'This save reflects your resistance to mental influence as well as many magical effects.',
					compset: 'Save',
					stAbScModifier: 2,
					stNet: 4,
					stBaseBon: 2,
					AbScUsed: 'asWis',
				},
				'wpUnarmed.92': {
					name: 'Unarmed strike',
					description:
						'An unarmed strike can be dealt with any limb or appendage. Unarmed strikes deal nonlethal damage, and the damage from an unarmed strike is considered weapon damage for the purposes of effects that give you a bonus to weapon damage rolls.',
					compset: 'Weapon',
					wpMelAttacks: {
						atk1: {
							id: 'Melee',
							name: 'Melee',
							attack: '+5',
							attackExpr: '={1d20+5}',
							damage: '1d3+4 S',
							damageExpr: '={(1d3+4)f1c2dm[Slashing:S]}',
						},
						atk2: {
							id: 'MeleeFull',
							name: 'Melee Full Attack',
							attack: '+1|+1',
							attackExpr: '={1d20+1}|={1d20+1}',
						},
					},
					WeaponUse: 'Melee',
					items: {
						'wsArchaic.98': {
							name: 'Archaic',
							description:
								'This weapon deals 5 fewer damage unless the target is wearing no armor or archaic armor. Archaic weapons are made of primitive materials such as wood or common steel.',
							compset: 'WepSpecProp',
							containment: 'Installed',
						},
						'wsNonlethal.97': {
							name: 'Nonlethal',
							description:
								'This weapon deals nonlethal damage. See page 252 for more information on how nonlethal damage works.',
							compset: 'WepSpecProp',
							containment: 'Installed',
						},
					},
				},
			},
			StorageLocker: {
				name: 'Equipment Storage Locker',
				compset: 'StorageLocker',
			},
		},
	},
};
