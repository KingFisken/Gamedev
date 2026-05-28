// ============================================================
// Eldaria — by Charlie Dahm
// Central Data Store — Living Document
// ============================================================

// ── CLASSES ─────────────────────────────────────────────────

const CLASSES = [
  {
    id: 'warrior',
    name: 'WARRIOR',
    subtitle: 'Frontline Tank',
    colorClass: 'color-warrior',
    icon: '🛡',
    resource: 'stamina',
    resourceNote: null,
    description: 'The immovable frontline defender. Absorbs punishment and protects the party with exceptional durability and reactive abilities.',
    stats: [
      { label: 'Strength',     rating: 'high',   fill: 'fill-high',   value: 'High' },
      { label: 'HP',           rating: 'high',   fill: 'fill-high',   value: 'High' },
      { label: 'DEF',          rating: 'high',   fill: 'fill-high',   value: 'High' },
      { label: 'SPD',          rating: 'medium', fill: 'fill-medium', value: 'Medium' },
      { label: 'ATK',          rating: 'medium', fill: 'fill-medium', value: 'Medium' },
      { label: 'Agility',      rating: 'medium', fill: 'fill-medium', value: 'Medium' },
      { label: 'Intelligence', rating: 'low',    fill: 'fill-low',    value: 'Low' },
    ],
    essence: {
      name: 'Essence of the Warrior — Immovable',
      duration: '2 turns',
      effect: 'DEF is pushed beyond its normal cap. Cannot be moved, knocked back, or stunned for the duration.',
    },
    skillTiers: [
      {
        label: 'Foundation',
        skills: [
          { name: 'Shield Bash', desc: 'Strike with your shield, dealing damage and inflicting a chance to stun.' },
          { name: 'Fortify',     desc: 'Brace for impact — significantly raise DEF for several turns.' },
        ],
      },
      {
        label: 'Mastery',
        skills: [
          { name: 'War Cry',       desc: 'Bellow a battle cry that raises ATK for all party members.' },
          { name: 'Counter Stance', desc: 'Enter a reactive posture — automatically counter the next attack that lands.' },
        ],
      },
      {
        label: 'Pinnacle',
        skills: [
          { name: 'Last Stand', desc: 'When HP reaches a critical threshold, surge with a massive boost to both DEF and ATK. Desperation unlocks something deeper.', isUltimate: true },
        ],
      },
    ],
    unlockCondition: null,
    notes: null,
  },
  {
    id: 'ranger',
    name: 'RANGER',
    subtitle: 'Ranged Damage',
    colorClass: 'color-ranger',
    icon: '🏹',
    resource: 'stamina',
    resourceNote: null,
    description: 'A swift, elusive hunter who strikes from distance and controls the battlefield. Fragile up close but devastating when given room.',
    stats: [
      { label: 'Agility',      rating: 'high',   fill: 'fill-high',   value: 'High' },
      { label: 'SPD',          rating: 'vhigh',  fill: 'fill-vhigh',  value: 'Very High' },
      { label: 'ATK',          rating: 'medium', fill: 'fill-medium', value: 'Medium' },
      { label: 'Strength',     rating: 'medium', fill: 'fill-medium', value: 'Medium' },
      { label: 'HP',           rating: 'medium', fill: 'fill-medium', value: 'Medium' },
      { label: 'DEF',          rating: 'low',    fill: 'fill-low',    value: 'Low' },
      { label: 'Intelligence', rating: 'low',    fill: 'fill-low',    value: 'Low' },
    ],
    essence: {
      name: 'Essence of the Ranger — Eagle Eye',
      duration: '2 turns',
      effect: 'All attacks strike every enemy simultaneously — single-target moves become battlefield-wide.',
    },
    skillTiers: [
      {
        label: 'Foundation',
        skills: [
          { name: 'Precise Shot', desc: 'A carefully aimed shot with increased accuracy and critical chance.' },
          { name: 'Track',        desc: 'Mark a target — reveal weaknesses and gain bonus damage against them.' },
        ],
      },
      {
        label: 'Mastery',
        skills: [
          { name: 'Volley',      desc: 'Loose a rain of arrows striking all enemies for moderate damage.' },
          { name: 'Camouflage', desc: 'Blend into the environment — become harder to target for several turns.' },
        ],
      },
      {
        label: 'Pinnacle',
        skills: [
          { name: 'Hawkeye', desc: 'Enter a transcendent focus state. Next attack ignores range penalties, armour, and hits the target\'s weakest point.', isUltimate: true },
        ],
      },
    ],
    unlockCondition: null,
    notes: null,
  },
  {
    id: 'mage',
    name: 'MAGE',
    subtitle: 'Elemental Caster',
    colorClass: 'color-mage',
    icon: '✦',
    resource: 'mana',
    resourceNote: 'Mana does not recover during battle — manage it carefully.',
    description: 'Raw elemental power given form. Devastating offensive potential is balanced by fragility and a finite mana pool that cannot be replenished in combat.',
    stats: [
      { label: 'Intelligence', rating: 'max',    fill: 'fill-max',    value: 'MAX' },
      { label: 'ATK',          rating: 'high',   fill: 'fill-high',   value: 'High' },
      { label: 'Strength',     rating: 'low',    fill: 'fill-low',    value: 'Low' },
      { label: 'HP',           rating: 'medium', fill: 'fill-medium', value: 'Medium' },
      { label: 'DEF',          rating: 'low',    fill: 'fill-low',    value: 'Low' },
      { label: 'SPD',          rating: 'low',    fill: 'fill-low',    value: 'Low' },
      { label: 'Agility',      rating: 'low',    fill: 'fill-low',    value: 'Low' },
    ],
    essence: {
      name: 'Essence of the Mage — Arcane Surge',
      duration: '2 turns',
      effect: 'All spells cost zero mana and ignore elemental resistances and immunities.',
    },
    skillTiers: [
      {
        label: 'Foundation',
        skills: [
          { name: 'Fireball',   desc: 'Hurl a ball of fire that explodes on impact, damaging the target and nearby enemies.' },
          { name: 'Frost Nova', desc: 'Unleash a burst of ice that damages and slows all enemies in range.' },
        ],
      },
      {
        label: 'Mastery',
        skills: [
          { name: 'Chain Lightning', desc: 'A bolt of lightning that leaps between enemies, dealing diminishing damage with each jump.' },
          { name: 'Arcane Shield',   desc: 'Conjure a barrier of pure magic that absorbs incoming damage.' },
        ],
      },
      {
        label: 'Pinnacle',
        skills: [
          { name: 'Ley Line', desc: 'Tap into a buried ley line and draw catastrophic magical energy through it. Devastating damage to a single target. Costs significant mana.', isUltimate: true },
        ],
      },
    ],
    unlockCondition: null,
    notes: null,
  },
  {
    id: 'assassin',
    name: 'ASSASSIN',
    subtitle: 'Burst Damage & Stealth',
    colorClass: 'color-assassin',
    icon: '🗡',
    resource: 'stamina',
    resourceNote: null,
    description: 'A blade from the dark. Unmatched speed and burst damage, but nearly no tolerance for being hit. Rewards perfect positioning and pre-emptive striking.',
    stats: [
      { label: 'Agility', rating: 'max',   fill: 'fill-max',   value: 'MAX' },
      { label: 'SPD',     rating: 'max',   fill: 'fill-max',   value: 'MAX' },
      { label: 'ATK',     rating: 'vhigh', fill: 'fill-vhigh', value: 'Very High' },
      { label: 'HP',      rating: 'low',   fill: 'fill-low',   value: 'Low' },
      { label: 'DEF',     rating: 'vlow',  fill: 'fill-vlow',  value: 'Very Low' },
      { label: 'Strength',rating: 'medium',fill: 'fill-medium',value: 'Medium' },
      { label: 'Intelligence', rating: 'low', fill: 'fill-low', value: 'Low' },
    ],
    essence: {
      name: 'Essence of the Assassin — Shadow Step',
      duration: '2 turns',
      effect: 'Becomes untargetable. All attacks are guaranteed critical hits and deal bonus Shadow damage.',
    },
    skillTiers: [
      {
        label: 'Foundation',
        skills: [
          { name: 'Backstab',    desc: 'Strike from behind or the flank for massive damage — highly effective against unaware targets.' },
          { name: 'Smoke Bomb', desc: 'Throw a smoke bomb that obscures vision, reducing enemy accuracy and creating an escape opportunity.' },
        ],
      },
      {
        label: 'Mastery',
        skills: [
          { name: 'Poison Blade', desc: 'Coat the blade in poison — applies a damage-over-time effect that persists between turns.' },
          { name: 'Shadow Meld', desc: 'Slip into shadow, temporarily avoiding all attacks and resetting threat.' },
        ],
      },
      {
        label: 'Pinnacle',
        skills: [
          { name: 'Execute', desc: 'A finishing strike targeting enemies below a HP threshold. If the target dies, Stamina is partially refunded.', isUltimate: true },
        ],
      },
    ],
    unlockCondition: null,
    notes: null,
  },
  {
    id: 'necromancer',
    name: 'NECROMANCER',
    subtitle: 'Undead Summoner & Debuffer',
    colorClass: 'color-necro',
    icon: '💀',
    resource: 'mana',
    resourceNote: 'Mana does not recover during battle. Has 2 dedicated undead party slots. Can raise fallen enemies after battle.',
    description: 'Commands death itself. Two additional party slots are reserved for undead thralls. After battle, fallen enemies may be raised. Mana management is critical.',
    stats: [
      { label: 'Intelligence', rating: 'max',    fill: 'fill-max',    value: 'MAX' },
      { label: 'ATK',          rating: 'high',   fill: 'fill-high',   value: 'High' },
      { label: 'HP',           rating: 'medium', fill: 'fill-medium', value: 'Medium' },
      { label: 'DEF',          rating: 'low',    fill: 'fill-low',    value: 'Low' },
      { label: 'SPD',          rating: 'low',    fill: 'fill-low',    value: 'Low' },
      { label: 'Strength',     rating: 'low',    fill: 'fill-low',    value: 'Low' },
      { label: 'Agility',      rating: 'low',    fill: 'fill-low',    value: 'Low' },
    ],
    essence: {
      name: 'Essence of the Necromancer — Death\'s Touch',
      duration: '2 turns',
      effect: 'All attacks drain HP directly from the target and restore it to the Necromancer.',
    },
    skillTiers: [
      {
        label: 'Foundation',
        skills: [
          { name: 'Raise the Fallen', desc: 'Animate a fallen enemy or party member as an undead thrall under your command.' },
          { name: 'Soul Drain',       desc: 'Sap the life-force from a target — deals damage and steals a small amount of HP.' },
        ],
      },
      {
        label: 'Mastery',
        skills: [
          { name: 'Bone Shield', desc: 'Summon a shield of animated bone that absorbs damage for a turn.' },
          { name: 'Plague',      desc: 'Inflict a spreading disease that weakens and damages all enemies over time.' },
        ],
      },
      {
        label: 'Pinnacle',
        skills: [
          { name: 'Death\'s Embrace', desc: 'Channel the full power of death. Greatly empower all undead thralls and deal massive damage to all enemies. Expensive mana cost.', isUltimate: true },
        ],
      },
    ],
    unlockCondition: null,
    notes: null,
    raiseTiers: [
      { tier: 1, name: 'Fresh Dead',      canRaise: 'Peasants, soldiers, scouts',               typing: 'Spirit only',                    available: 'From the start' },
      { tier: 2, name: 'Seasoned Dead',   canRaise: 'Knights, mages, rangers',                  typing: 'Spirit + one type from life',     available: 'Mid game — after dungeon 3 or 4' },
      { tier: 3, name: 'Ancient Dead',    canRaise: 'Captains, battlemages, paladins',           typing: 'Spirit + two types from life',    available: 'Late game — after dungeon 6 or 7' },
      { tier: 4, name: 'Named Generals',  canRaise: 'The five named generals only — ritual required', typing: 'Spirit + full typing + bonus type', available: 'Quest-locked — any point if quest completed' },
    ],
  },
  {
    id: 'barbarian',
    name: 'BARBARIAN',
    subtitle: 'Unstoppable Fury',
    colorClass: 'color-barbarian',
    icon: '⚡',
    resource: 'rage',
    resourceNote: 'Rage builds from taking damage, not dealing it. At 75% Rage, automatically enters Frenzy: +40% damage, -30% DEF, cannot be cancelled.',
    description: 'A force of nature from the Ashborn tribes. Builds Rage by enduring punishment rather than dealing it. Frenzy is uncontrollable but devastating.',
    stats: [
      { label: 'Strength', rating: 'max',    fill: 'fill-max',    value: 'MAX' },
      { label: 'HP',       rating: 'max',    fill: 'fill-max',    value: 'MAX' },
      { label: 'DEF',      rating: 'high',   fill: 'fill-high',   value: 'High' },
      { label: 'ATK',      rating: 'high',   fill: 'fill-high',   value: 'High' },
      { label: 'SPD',      rating: 'low',    fill: 'fill-low',    value: 'Low' },
      { label: 'Agility',  rating: 'vlow',   fill: 'fill-vlow',   value: 'Very Low' },
      { label: 'Intelligence', rating: 'low', fill: 'fill-low',   value: 'Low' },
    ],
    essence: {
      name: 'Essence of the Barbarian — Ancestral Fury',
      duration: '2 turns',
      effect: 'Instantly fills Rage to maximum and triggers Frenzy without the -30% DEF penalty.',
    },
    skillTiers: [
      {
        label: 'Foundation',
        skills: [
          { name: 'Earthshaker',  desc: 'Slam the ground with both fists — damages and staggers all nearby enemies.' },
          { name: 'Iron Will',    desc: 'Grit through pain — temporarily resist the next source of crowd control or stagger.' },
        ],
      },
      {
        label: 'Mastery',
        skills: [
          { name: 'Warcry',          desc: 'A primal roar that taunts all enemies and accelerates Rage generation.' },
          { name: 'Mountain Strike', desc: 'A single enormous blow that ignores a portion of the target\'s armour.' },
        ],
      },
      {
        label: 'Pinnacle',
        skills: [
          { name: 'Frenzy', desc: 'Manually trigger Frenzy state if Rage is high enough. Does not remove the DEF penalty unless Ancestral Fury is active.', isUltimate: true },
        ],
      },
    ],
    rangedMoves: [
      { name: 'Axe Throw',    how: 'Found carved on a stone in the Midlands. Not taught — discovered.',   tags: ['found'] },
      { name: 'Boulder Hurl', how: 'Legendary move. Ashborn standing stone. Inscription reads: "Gregor learned this here. Now you do."', tags: ['legendary', 'one per world'] },
    ],
    unlockCondition: 'Complete the Ashborn Tribal Arc',
    notes: 'Unlockable class — requires completing the full Ashborn storyline with Kalen.',
  },
];

// ── FOLLOWERS ───────────────────────────────────────────────
// Structure: chains with nested evolution trees.
// Each node: { name, types, levelReq, itemReqs, notes, isLegendary, isUnique, isTerminal, children }
// isUnique = "one per world" / very limited. isLegendary = legendary evolution.

const FOLLOWER_CHAINS = {
  human: [
    {
      id: 'peasant',
      chainName: 'Peasant Chain',
      catchInfo: 'Common encounter — all areas',
      contract: 'Basic Contract',
      root: {
        name: 'Peasant', types: ['flesh'],
        levelReq: null, itemReqs: [], notes: 'Starting form for the main human evolution tree.',
        children: [
          {
            name: 'Soldier', types: ['flesh'],
            levelReq: 10, itemReqs: ['Iron Sword'], notes: null,
            children: [
              {
                name: 'Armored Soldier', types: ['flesh'],
                levelReq: 15, itemReqs: ['Iron Armor'], notes: null,
                children: [
                  {
                    name: 'Knight', types: ['flesh'],
                    levelReq: 25, itemReqs: ['Plate Armor', "Knight's Token", "Knight's Writ (80,000 gold)"], notes: null,
                    children: [
                      {
                        name: 'Knight Commander', types: ['flesh'],
                        levelReq: 40, itemReqs: ["Commander's Seal"], notes: null,
                        children: [
                          {
                            name: "King's Guard", types: ['flesh', 'holy'],
                            levelReq: 60, itemReqs: ['Royal Commission (rare, race-typed)'], notes: 'Terminal — race-typed rare item required.',
                            isTerminal: true, isUnique: false, children: []
                          },
                          {
                            name: 'Lord Knight', types: ['flesh'],
                            levelReq: 60, itemReqs: ["Lord's Seal (from Mason Winters)"], notes: "Requires Mason Winters' favour.",
                            children: [
                              {
                                name: 'Knight of the Realm', types: ['holy', 'strike'],
                                levelReq: 90, itemReqs: ['Crown Writ (one per game)'], notes: 'One Crown Writ exists per playthrough. Holy/Strike typing.',
                                isTerminal: true, isUnique: true, isLegendary: true, children: []
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                name: 'Dark Blade', types: ['flesh', 'shadow'],
                levelReq: 20, itemReqs: ['Black Blade'], notes: 'Branches from Soldier.',
                isTerminal: true, children: []
              },
              {
                name: 'Berserker', types: ['flesh', 'strike'],
                levelReq: 20, itemReqs: ['Siege Axe'], notes: 'Branches from Soldier. Siege Axe shared with Dwarf Axe path.',
                isTerminal: true, children: []
              }
            ]
          },
          {
            name: 'Hedge Mage', types: ['flesh'],
            levelReq: 10, itemReqs: ['Magic Staff'], notes: null,
            children: [
              {
                name: 'War Mage', types: ['flesh'],
                levelReq: 20, itemReqs: ['Battle Tome'], notes: null, isTerminal: true, children: []
              },
              {
                name: 'Frost Caller', types: ['flesh', 'ice'],
                levelReq: 20, itemReqs: ['Frost Crystal'], notes: null, isTerminal: true, children: []
              }
            ]
          },
          {
            name: 'Scout', types: ['flesh'],
            levelReq: 10, itemReqs: ['Hunting Bow'], notes: null,
            children: [
              {
                name: 'Ranger', types: ['flesh', 'strike'],
                levelReq: 20, itemReqs: ['Ranger Cloak'], notes: null, isTerminal: true, children: []
              }
            ]
          },
          {
            name: 'Acolyte', types: ['flesh', 'holy'],
            levelReq: 10, itemReqs: ['Holy Symbol'], notes: null,
            children: [
              {
                name: 'Paladin', types: ['flesh', 'holy', 'strike'],
                levelReq: 20, itemReqs: ['Sacred Blade'], notes: null, isTerminal: true, children: []
              },
              {
                name: 'Inquisitor', types: ['flesh', 'holy', 'strike'],
                levelReq: 20, itemReqs: ['Inquisitor Seal'], notes: null, isTerminal: true, children: []
              }
            ]
          },
          {
            name: 'Toxin Brewer', types: ['flesh', 'toxin'],
            levelReq: 10, itemReqs: ['Poison Vial'], notes: null,
            children: [
              {
                name: 'Plague Doctor', types: ['flesh', 'toxin'],
                levelReq: 20, itemReqs: ["Doctor's Mask"], notes: null, isTerminal: true, children: []
              }
            ]
          }
        ]
      }
    },
    {
      id: 'arch_lich',
      chainName: 'Arch Lich',
      catchInfo: 'Any undead follower evolved to this form',
      contract: 'Forbidden Tome (one per game)',
      root: {
        name: 'Arch Lich', types: ['spirit', 'eldritch', 'shadow'],
        levelReq: 60, itemReqs: ['Forbidden Tome (one per game)'], notes: 'Any undead follower at lvl 60+ can become an Arch Lich. Only one Forbidden Tome exists.',
        isTerminal: true, isLegendary: true, isUnique: true, children: []
      }
    },
    {
      id: 'bandit',
      chainName: 'Bandit Chain',
      catchInfo: 'Common encounter — all areas',
      contract: 'Basic Contract',
      root: {
        name: 'Bandit', types: ['flesh', 'strike'],
        levelReq: null, itemReqs: [], notes: 'Three separate paths: Redemption, Professional, Dark.',
        children: [
          {
            name: 'Soldier', types: ['flesh'], levelReq: 10, itemReqs: ['Iron Sword'],
            notes: 'Redemption path — enters the main Peasant→Knight chain.',
            isTerminal: false, children: [{ name: '→ Joins Peasant Chain (Armored Soldier)', types: [], levelReq: null, itemReqs: [], notes: 'Continues through Armored Soldier → Knight → Knight Commander → Lord Knight → Knight of the Realm.', isTerminal: true, children: [] }]
          },
          {
            name: 'Outlaw Captain', types: ['flesh', 'strike'], levelReq: 20, itemReqs: ['War Banner', 'Silver Contract'],
            notes: 'Professional path.',
            children: [
              {
                name: 'Mercenary General', types: ['flesh', 'strike'], levelReq: 35, itemReqs: ["Commander's Seal"],
                notes: null, isTerminal: true, children: []
              }
            ]
          },
          {
            name: 'Sellsword', types: ['flesh', 'strike'], levelReq: 15, itemReqs: ['Iron Sword'],
            notes: 'Professional path — alternate branch.',
            children: [
              {
                name: 'Hired Blade', types: ['flesh', 'shadow', 'strike'], levelReq: 25, itemReqs: ['Black Blade'],
                notes: null, isTerminal: true, children: []
              }
            ]
          },
          {
            name: 'Rogue', types: ['flesh', 'shadow'], levelReq: 15, itemReqs: ['Lockpick Set'],
            notes: 'Dark path.',
            children: [
              {
                name: 'Assassin', types: ['shadow', 'strike'], levelReq: 30, itemReqs: ['Assassin Brand'],
                notes: 'Loses Flesh typing on evolution. Shadow/Strike only.', isTerminal: true, children: []
              }
            ]
          }
        ]
      }
    },
    {
      id: 'monk',
      chainName: 'Monk Chain',
      catchInfo: 'Silver Contract — no combat required',
      contract: 'Silver Contract',
      root: {
        name: 'Monk', types: ['flesh', 'holy'],
        levelReq: null, itemReqs: [], notes: null,
        children: [
          {
            name: 'Brother', types: ['flesh', 'holy'], levelReq: 15, itemReqs: ['Prayer Beads'], notes: null,
            children: [
              {
                name: 'Abbot', types: ['flesh', 'holy'], levelReq: 25, itemReqs: ["Abbot's Staff"], notes: null,
                children: [
                  {
                    name: 'Warrior Saint', types: ['holy', 'strike'], levelReq: 40, itemReqs: ["Saint's Relic"],
                    notes: 'One per world.', isTerminal: true, isUnique: true, isLegendary: true, children: []
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      id: 'hedge_witch',
      chainName: 'Hedge Witch Chain',
      catchInfo: 'Unique offering — no standard contract',
      contract: 'Special (unique offering)',
      root: {
        name: 'Hedge Witch', types: ['flesh', 'toxin'],
        levelReq: null, itemReqs: [], notes: 'Requires a unique offering to recruit.',
        children: [
          {
            name: 'Wise Woman', types: ['flesh', 'toxin'], levelReq: 15, itemReqs: ['Moonflower'], notes: null,
            children: [
              {
                name: 'Coven Witch', types: ['eldritch', 'toxin'], levelReq: 25, itemReqs: ['Coven Stone'], notes: null,
                children: [
                  {
                    name: 'Green Lady', types: ['eldritch', 'toxin', 'earth'], levelReq: 40, itemReqs: ['Heart of Forest'],
                    notes: 'Legendary terminal.', isTerminal: true, isLegendary: true, children: []
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      id: 'blacksmith',
      chainName: 'Blacksmith Chain',
      catchInfo: 'Basic Contract',
      contract: 'Basic Contract',
      root: {
        name: 'Blacksmith', types: ['flesh', 'earth'],
        levelReq: null, itemReqs: [], notes: 'Passive crafting mechanic active in all forms. One-time legendary forge available.',
        children: [
          {
            name: 'Armorer', types: ['flesh', 'earth', 'strike'], levelReq: 15, itemReqs: ["Smith's Hammer"], notes: null,
            children: [
              {
                name: 'Master Smith', types: ['flesh', 'earth', 'strike'], levelReq: 30, itemReqs: ["Master's Tongs"],
                notes: "Master's Tongs shared with Dwarf Master Dwarf Smith.", children: [
                  {
                    name: 'Runesmith', types: ['earth', 'strike', 'eldritch'], levelReq: 50, itemReqs: ['Forge Heart'],
                    notes: 'Legendary. Forge Heart required.', isTerminal: true, isLegendary: true, children: []
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      id: 'gravedigger',
      chainName: 'Gravedigger Chain',
      catchInfo: 'Basic Contract — very low catch rate, base form only',
      contract: 'Basic Contract',
      root: {
        name: 'Gravedigger', types: ['flesh', 'earth'],
        levelReq: null, itemReqs: [], notes: 'Very low catch rate. Base form only catchable.',
        children: [
          {
            name: 'Sexton', types: ['flesh', 'earth'], levelReq: 15, itemReqs: ['Bone Lantern'], notes: null,
            children: [
              {
                name: 'Bone Keeper', types: ['spirit', 'earth'], levelReq: 30, itemReqs: ['Ossuary Key'], notes: null,
                children: [
                  {
                    name: 'Corpse Collector', types: ['spirit', 'earth', 'shadow'], levelReq: 50, itemReqs: ["Collector's Ledger"],
                    notes: 'Legendary.', isTerminal: true, isLegendary: true, children: []
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      id: 'court_jester',
      chainName: 'Court Jester Chain',
      catchInfo: 'No contract — follows if interested',
      contract: 'None (follows voluntarily)',
      root: {
        name: 'Court Jester', types: ['flesh', 'shadow'],
        levelReq: null, itemReqs: [], notes: 'Cannot be contracted — will follow if it decides to.',
        children: [
          {
            name: "Court Fool", types: ['flesh', 'shadow'], levelReq: 15, itemReqs: ["Fool's Sceptre"], notes: null,
            children: [
              {
                name: 'Trickster', types: ['shadow', 'eldritch'], levelReq: 25, itemReqs: ['Trick Blade'], notes: null,
                children: [
                  {
                    name: 'The Mad King', types: ['shadow', 'eldritch'], levelReq: 40, itemReqs: ['Crown of Thorns'],
                    notes: 'One per world.', isTerminal: true, isUnique: true, isLegendary: true, children: []
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      id: 'pit_fighter',
      chainName: 'Pit Fighter Chain',
      catchInfo: 'Ring encounter or road encounter',
      contract: 'Standard',
      root: {
        name: 'Pit Fighter', types: ['flesh', 'strike'],
        levelReq: null, itemReqs: [], notes: null,
        children: [
          {
            name: 'Pugilist', types: ['flesh', 'strike'], levelReq: 10, itemReqs: ["Fighter's Wraps"], notes: null,
            children: [
              {
                name: 'Brawler', types: ['flesh', 'strike'], levelReq: 20, itemReqs: ['Iron Knuckles'], notes: null,
                children: [
                  {
                    name: 'Champion', types: ['flesh', 'strike'], levelReq: 35, itemReqs: ["Champion's Belt (Tournament only)"],
                    notes: "Champion's Belt only obtainable from tournament — cannot be bought.", children: [
                      {
                        name: 'Ironclad', types: ['fire', 'strike'], levelReq: 55, itemReqs: ['Sunfire Gauntlets'],
                        notes: 'Legendary.', isTerminal: true, isLegendary: true, children: []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    },
  ],

  gothic: [
    {
      id: 'war_dog',
      chainName: 'War Dog',
      catchInfo: 'Common encounter',
      contract: 'Basic Contract',
      root: {
        name: 'War Dog', types: ['flesh', 'strike'],
        levelReq: null, itemReqs: [], notes: null,
        children: [
          {
            name: 'Armored War Dog', types: ['flesh', 'strike'], levelReq: 10, itemReqs: ['Iron Collar'], notes: null,
            children: [
              {
                name: 'Hellhound', types: ['flesh', 'fire', 'strike'], levelReq: 25, itemReqs: ['Hellfire Brand (rare)'],
                notes: 'Hellfire Brand is rare. Shared potential with Black Dog chain.', isTerminal: true, children: []
              }
            ]
          }
        ]
      }
    },
    {
      id: 'raven',
      chainName: 'Raven Chain',
      catchInfo: 'Common encounter',
      contract: 'Basic Contract',
      root: {
        name: 'Raven', types: ['flesh', 'strike'],
        levelReq: null, itemReqs: [], notes: null,
        children: [
          {
            name: 'War Eagle', types: ['flesh', 'strike'], levelReq: 15, itemReqs: ['Sunfeather (day only)'],
            notes: 'Sunfeather only available during daytime.',
            children: [
              {
                name: 'Storm Kite', types: ['flesh', 'lightning', 'strike'], levelReq: 35, itemReqs: ['Royal Talon'],
                notes: 'Legendary.', isTerminal: true, isLegendary: true, children: []
              }
            ]
          },
          {
            name: 'Shadow Raven', types: ['flesh', 'shadow', 'strike'], levelReq: 15, itemReqs: ['Night Quill (night only)'],
            notes: 'Night Quill only available at night.',
            children: [
              {
                name: 'Night Wraith', types: ['shadow', 'eldritch', 'strike'], levelReq: 35, itemReqs: ['Void Feather'],
                notes: 'One per world.', isTerminal: true, isUnique: true, isLegendary: true, children: []
              }
            ]
          }
        ]
      }
    },
    {
      id: 'gargoyle',
      chainName: 'Gargoyle',
      catchInfo: 'Specific cathedral — once per world',
      contract: 'Once per world location',
      root: {
        name: 'Gargoyle', types: ['earth', 'strike'],
        levelReq: null, itemReqs: [], notes: 'Found at a specific cathedral. Once per world.',
        children: [
          {
            name: 'Grotesque', types: ['earth', 'shadow', 'strike'], levelReq: 20, itemReqs: ['Enchanted Chisel'], notes: null,
            children: [
              {
                name: 'Stone Sentinel', types: ['earth', 'shadow', 'strike'], levelReq: 40, itemReqs: ['Cathedral Heart'],
                notes: 'Legendary.', isTerminal: true, isUnique: true, isLegendary: true, children: []
              }
            ]
          }
        ]
      }
    },
    {
      id: 'black_dog',
      chainName: 'Black Dog',
      catchInfo: 'Crossroads at night — once per world',
      contract: 'Once per world encounter',
      root: {
        name: 'Black Dog', types: ['shadow', 'strike'],
        levelReq: null, itemReqs: [], notes: 'Crossroads encounter, night only. Once per world.',
        children: [
          {
            name: 'Doom Hound', types: ['shadow', 'fire', 'strike'], levelReq: 25, itemReqs: ['Hellfire Brand (shared)'],
            notes: 'Hellfire Brand shared with War Dog chain.',
            children: [
              {
                name: 'The Harbinger', types: ['shadow', 'fire', 'eldritch'], levelReq: 50, itemReqs: ['Void Collar'],
                notes: 'One per world.', isTerminal: true, isUnique: true, isLegendary: true, children: []
              }
            ]
          }
        ]
      }
    },
    {
      id: 'kelpie',
      chainName: 'Kelpie',
      catchInfo: 'Weaken below 50% HP then use Silver Bridle',
      contract: 'Silver Bridle (special)',
      root: {
        name: 'Kelpie', types: ['ice', 'strike'],
        levelReq: null, itemReqs: ['Silver Bridle'], notes: 'Must weaken below 50% HP before Silver Bridle works.',
        children: [
          {
            name: 'Night Mare', types: ['ice', 'shadow', 'strike'], levelReq: 25, itemReqs: ['Moonwater Vial'], notes: null,
            children: [
              {
                name: 'Tide Wraith', types: ['ice', 'shadow', 'eldritch'], levelReq: 45, itemReqs: ['Abyssal Tide'],
                notes: 'One per world.', isTerminal: true, isUnique: true, isLegendary: true, children: []
              }
            ]
          }
        ]
      }
    },
    {
      id: 'barrow_wight',
      chainName: 'Barrow Wight',
      catchInfo: 'Ancient Coin placed at barrow entrance',
      contract: 'Ancient Coin ritual',
      root: {
        name: 'Barrow Wight', types: ['spirit', 'earth'],
        levelReq: null, itemReqs: ['Ancient Coin (at barrow entrance)'], notes: 'Ritual recruitment — place coin at entrance.',
        children: [
          {
            name: 'Barrow King', types: ['spirit', 'earth', 'shadow'], levelReq: 30, itemReqs: ['Burial Crown'],
            notes: 'Legendary.', isTerminal: true, isLegendary: true, children: []
          }
        ]
      }
    },
    {
      id: 'boggart',
      chainName: 'Boggart',
      catchInfo: 'Forest shelter — Bowl of Cream x3 consecutive nights, once per world',
      contract: 'Bowl of Cream × 3 (consecutive nights)',
      root: {
        name: 'Boggart', types: ['shadow', 'toxin'],
        levelReq: null, itemReqs: ['Bowl of Cream × 3 consecutive nights'], notes: 'Leave bowl of cream three nights in a row at forest shelter.',
        children: [
          {
            name: 'Hobgoblin', types: ['shadow', 'toxin'], levelReq: 15, itemReqs: ['Hearth Stone'], notes: null,
            children: [
              {
                name: 'Red Cap', types: ['shadow', 'toxin', 'strike'], levelReq: 30, itemReqs: ['Pact Seal'],
                notes: null, isTerminal: true, children: []
              }
            ]
          }
        ]
      }
    },
    {
      id: 'wisp',
      chainName: 'Will-o-Wisp',
      catchInfo: 'Darkness only, must have Glass Lantern equipped',
      contract: 'Glass Lantern (must be equipped)',
      root: {
        name: "Will-o'-Wisp", types: ['eldritch', 'shadow'],
        levelReq: null, itemReqs: ['Glass Lantern (equipped)'], notes: 'Only appears in darkness. Glass Lantern must be equipped to attract.',
        children: [
          {
            name: 'Foxfire', types: ['eldritch', 'fire'], levelReq: 20, itemReqs: ['Foxfire Vial'], notes: null,
            children: [
              {
                name: 'Corpse Light', types: ['eldritch', 'fire', 'spirit'], levelReq: 40, itemReqs: ['Soul Lantern'],
                notes: 'One per world.', isTerminal: true, isUnique: true, isLegendary: true, children: []
              }
            ]
          }
        ]
      }
    },
  ],

  elven: [
    {
      id: 'forest_scout',
      chainName: 'Forest Scout Chain',
      catchInfo: 'Low catch rate for non-elves, normal for Elf player',
      contract: 'Standard',
      root: {
        name: 'Forest Scout', types: ['flesh', 'ice'],
        levelReq: null, itemReqs: [], notes: null,
        children: [
          {
            name: 'Elven Archer', types: ['flesh', 'ice', 'strike'], levelReq: 15, itemReqs: ['Elven Shortbow'], notes: null,
            children: [
              {
                name: 'Windwalker', types: ['ice', 'strike'], levelReq: 30, itemReqs: ['Moonsilver Arrow (night only)'],
                notes: 'Moonsilver Arrow only available at night.',
                children: [
                  {
                    name: 'Stormcaller', types: ['ice', 'strike'], levelReq: 50, itemReqs: ['Ancient Bowstring (one per world)'],
                    notes: 'One per world.', isTerminal: true, isUnique: true, isLegendary: true, children: []
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      id: 'forest_blade',
      chainName: 'Forest Blade Chain',
      catchInfo: 'Low catch rate for non-elves',
      contract: 'Standard',
      root: {
        name: 'Forest Blade', types: ['flesh', 'ice'],
        levelReq: null, itemReqs: [], notes: null,
        children: [
          {
            name: 'Elven Duelist', types: ['flesh', 'ice', 'strike'], levelReq: 15, itemReqs: ['Twin Daggers'], notes: null,
            children: [
              {
                name: 'Bladestorm', types: ['flesh', 'ice', 'strike'], levelReq: 30, itemReqs: ['Silverwind Blades'], notes: null,
                children: [
                  {
                    name: 'The Tempest', types: ['ice', 'strike'], levelReq: 50, itemReqs: ['Eternal Edge (one per world)'],
                    notes: 'One per world.', isTerminal: true, isUnique: true, isLegendary: true, children: []
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      id: 'grove_keeper',
      chainName: 'Grove Keeper Chain',
      catchInfo: 'Gold Contract only — sacred grove location',
      contract: 'Gold Contract',
      root: {
        name: 'Grove Keeper', types: ['flesh', 'ice'],
        levelReq: null, itemReqs: ['Gold Contract'], notes: 'Only in sacred grove. Gold Contract required.',
        children: [
          {
            name: 'Elven Arcanist', types: ['flesh', 'ice', 'eldritch'], levelReq: 20, itemReqs: ['Forest Runestone'], notes: null,
            children: [
              {
                name: 'Elder Mage', types: ['ice', 'eldritch'], levelReq: 35, itemReqs: ['Ancient Tome'], notes: null,
                children: [
                  {
                    name: 'The Verdant', types: ['ice', 'eldritch', 'earth'], levelReq: 55, itemReqs: ['Heart of Grove (one per world)'],
                    notes: 'One per world.', isTerminal: true, isUnique: true, isLegendary: true, children: []
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      id: 'rogue_elf',
      chainName: 'Rogue Elf',
      catchInfo: 'Root cave exile — Gold Contract',
      contract: 'Gold Contract',
      root: {
        name: 'Rogue Elf', types: ['flesh', 'shadow'],
        levelReq: null, itemReqs: ['Gold Contract'], notes: 'Found in root cave. An exile. Gold Contract required.',
        isTerminal: true, children: []
      }
    },
  ],

  dwarf: [
    {
      id: 'dwarf_miner',
      chainName: 'Dwarf Chain (all paths from Dwarf Miner)',
      catchInfo: 'Basic or Silver Contract',
      contract: 'Basic / Silver Contract',
      root: {
        name: 'Dwarf Miner', types: ['earth', 'strike'],
        levelReq: null, itemReqs: [], notes: 'Stone Sense passive — finds underground materials automatically.',
        children: [
          {
            name: 'Hammer Fighter', types: ['earth', 'strike'], levelReq: 25, itemReqs: ['Dwarven Warhammer'],
            notes: 'Hammer path.',
            children: [
              {
                name: 'Stone Breaker', types: ['earth', 'strike'], levelReq: 40, itemReqs: ['Stone Crown (rare)'], notes: null,
                children: [
                  {
                    name: 'The Immovable', types: ['earth', 'strike'], levelReq: 60, itemReqs: ['Mountain Heart (one per world)'],
                    notes: 'One per world.', isTerminal: true, isUnique: true, isLegendary: true, children: []
                  }
                ]
              }
            ]
          },
          {
            name: 'Axe Fighter', types: ['earth', 'strike'], levelReq: 25, itemReqs: ['Siege Axe (shared with human Berserker)'],
            notes: 'Axe path. Siege Axe shared with human Berserker.',
            children: [
              {
                name: 'Berserker Dwarf', types: ['earth', 'fire', 'strike'], levelReq: 40, itemReqs: ['War Crest'], notes: null,
                children: [
                  {
                    name: 'The Cleaver', types: ['earth', 'fire', 'strike'], levelReq: 60, itemReqs: ["Ancestor's Axe (one per world)"],
                    notes: 'One per world.', isTerminal: true, isUnique: true, isLegendary: true, children: []
                  }
                ]
              }
            ]
          },
          {
            name: 'Boombuster', types: ['earth', 'fire', 'strike'], levelReq: 20, itemReqs: ['Blasting Powder'],
            notes: 'Boom path. 5% misfire chance.',
            children: [
              {
                name: 'Bombardier', types: ['earth', 'fire', 'strike'], levelReq: 35, itemReqs: ['Refined Charge (rare)'], notes: null,
                children: [
                  {
                    name: 'The Cannon', types: ['fire', 'strike'], levelReq: 55, itemReqs: ['Dragonfire Flask (one per world)'],
                    notes: 'One per world.', isTerminal: true, isUnique: true, isLegendary: true, children: []
                  }
                ]
              }
            ]
          },
          {
            name: 'Dwarf Smith', types: ['earth', 'strike'], levelReq: 20, itemReqs: ["Smith's Hammer"],
            notes: 'Smith path.',
            children: [
              {
                name: 'Master Dwarf Smith', types: ['earth', 'strike'], levelReq: 35, itemReqs: ["Master's Tongs (shared with human Blacksmith)"],
                notes: "Master's Tongs shared with human Blacksmith.", children: [
                  {
                    name: 'Runeforger', types: ['earth', 'strike', 'eldritch'], levelReq: 50, itemReqs: ['Ancestral Anvil (Act 3)'],
                    notes: 'Legendary forge with different pool from human Runesmith. Act 3 item.', isTerminal: true, isLegendary: true, children: []
                  }
                ]
              }
            ]
          }
        ]
      }
    },
  ],

  beastkin: [
    {
      id: 'feline_scout',
      chainName: 'Feline Scout Chain',
      catchInfo: 'Standard encounter',
      contract: 'Standard',
      root: {
        name: 'Feline Scout', types: ['flesh', 'strike'],
        levelReq: null, itemReqs: [], notes: 'Nine Lives trait: one-shot protection once per dungeon. Feline — panther appearance. Females are warriors.',
        children: [
          {
            name: 'Shadow Stalker', types: ['flesh', 'shadow', 'strike'], levelReq: 15, itemReqs: ['Shadow Wraps'], notes: null,
            children: [
              {
                name: 'Night Hunter', types: ['shadow', 'strike'], levelReq: 30, itemReqs: ["Panther's Cloak (rare)"], notes: null,
                children: [
                  {
                    name: 'The Phantom', types: ['shadow', 'strike'], levelReq: 50, itemReqs: ['Void Charm (one per world)'],
                    notes: 'One per world.', isTerminal: true, isUnique: true, isLegendary: true, children: []
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      id: 'feline_tracker',
      chainName: 'Feline Tracker Chain',
      catchInfo: 'Standard encounter',
      contract: 'Standard',
      root: {
        name: 'Feline Tracker', types: ['flesh', 'strike'],
        levelReq: null, itemReqs: [], notes: 'Nine Lives trait: one-shot protection once per dungeon.',
        children: [
          {
            name: 'Spear Dancer', types: ['flesh', 'strike'], levelReq: 15, itemReqs: ["Hunter's Spear"], notes: null,
            children: [
              {
                name: 'Lance Hunter', types: ['flesh', 'strike'], levelReq: 30, itemReqs: ['Ashwood Lance (rare)'],
                notes: 'Pierces frontline protection.',
                children: [
                  {
                    name: 'The Dawnstrike', types: ['fire', 'strike'], levelReq: 50, itemReqs: ['Sunfang Lance (one per world)'],
                    notes: 'One per world.', isTerminal: true, isUnique: true, isLegendary: true, children: []
                  }
                ]
              }
            ]
          }
        ]
      }
    },
  ],

  named: [
    {
      id: 'lord_commander',
      chainName: 'Lord Commander Aldric',
      catchInfo: 'Necromancer endgame quest, or trial for other classes — bound at burial site',
      contract: 'Special quest',
      root: {
        name: 'Lord Commander Aldric', types: ['spirit', 'strike', 'holy'],
        levelReq: null, itemReqs: [], notes: "Cannot follow the party. Bound at burial site. Gives undelivered note + Final Charge move.",
        isTerminal: true, isUnique: true, children: []
      }
    },
    {
      id: 'gregor',
      chainName: 'Gregor the Unbroken',
      catchInfo: 'Necromancer endgame quest or trial',
      contract: 'Special quest',
      root: {
        name: 'Gregor the Unbroken', types: ['spirit', 'strike'],
        levelReq: null, itemReqs: [], notes: 'Ashborn chief. Died from a thousand wounds.',
        isTerminal: true, isUnique: true, children: []
      }
    },
    {
      id: 'iron_countess',
      chainName: 'The Iron Countess',
      catchInfo: 'Necromancer endgame quest or trial',
      contract: 'Special quest',
      root: {
        name: 'The Iron Countess', types: ['spirit', 'earth', 'strike'],
        levelReq: null, itemReqs: [], notes: 'Held her flank until surrounded.',
        isTerminal: true, isUnique: true, children: []
      }
    },
    {
      id: 'sister_maren',
      chainName: 'Sister Maren',
      catchInfo: 'Necromancer endgame quest or trial',
      contract: 'Special quest',
      root: {
        name: 'Sister Maren', types: ['spirit', 'holy', 'toxin'],
        levelReq: null, itemReqs: [], notes: 'Field medic. Died saving others.',
        isTerminal: true, isUnique: true, children: []
      }
    },
    {
      id: 'vaelen',
      chainName: 'Vaelen the Pale Archer',
      catchInfo: 'Necromancer endgame quest or trial',
      contract: 'Special quest',
      root: {
        name: 'Vaelen the Pale Archer', types: ['spirit', 'ice', 'strike'],
        levelReq: null, itemReqs: [], notes: "Son of Elder Erwin. Betrayed by Mesterby's treachery.",
        isTerminal: true, isUnique: true, children: []
      }
    },
  ],
};

// ── ITEMS ───────────────────────────────────────────────────

const ITEMS = {
  weapons: [
    { name: 'Iron Sword',         rarity: 'common',   notes: 'Core evolution item — Peasant to Soldier, Bandit to Soldier.' },
    { name: 'Magic Staff',        rarity: 'common',   notes: 'Peasant to Hedge Mage.' },
    { name: 'Hunting Bow',        rarity: 'common',   notes: 'Peasant to Scout.' },
    { name: 'Black Blade',        rarity: 'uncommon', notes: 'Soldier to Dark Blade; Sellsword to Hired Blade.' },
    { name: 'Siege Axe',          rarity: 'uncommon', notes: 'Shared: Soldier to Berserker; Dwarf Miner to Axe Fighter.' },
    { name: 'Battle Tome',        rarity: 'uncommon', notes: 'Hedge Mage to War Mage.' },
    { name: 'Frost Crystal',      rarity: 'uncommon', notes: 'Hedge Mage to Frost Caller.' },
    { name: 'Ranger Cloak',       rarity: 'uncommon', notes: 'Scout to Ranger.' },
    { name: 'Sacred Blade',       rarity: 'uncommon', notes: 'Acolyte to Paladin.' },
    { name: 'Inquisitor Seal',    rarity: 'uncommon', notes: 'Acolyte to Inquisitor.' },
    { name: 'War Banner',         rarity: 'uncommon', notes: 'Bandit to Outlaw Captain (+ Silver Contract).' },
    { name: 'Lockpick Set',       rarity: 'uncommon', notes: 'Bandit to Rogue.' },
    { name: 'Assassin Brand',     rarity: 'rare',     notes: 'Rogue to Assassin. Shadow/Strike — loses Flesh.' },
    { name: "Abbot's Staff",      rarity: 'uncommon', notes: 'Brother to Abbot.' },
    { name: 'Moonflower',         rarity: 'uncommon', notes: 'Hedge Witch to Wise Woman.' },
    { name: 'Coven Stone',        rarity: 'uncommon', notes: 'Wise Woman to Coven Witch.' },
    { name: "Smith's Hammer",     rarity: 'common',   notes: 'Shared: Blacksmith to Armorer; Dwarf Miner to Dwarf Smith.' },
    { name: "Master's Tongs",     rarity: 'uncommon', notes: 'Shared: Master Smith upgrade; Dwarf Master Dwarf Smith.' },
    { name: 'Bone Lantern',       rarity: 'uncommon', notes: 'Gravedigger to Sexton.' },
    { name: 'Ossuary Key',        rarity: 'uncommon', notes: 'Sexton to Bone Keeper.' },
    { name: "Fool's Sceptre",     rarity: 'uncommon', notes: 'Court Jester to Court Fool.' },
    { name: 'Trick Blade',        rarity: 'rare',     notes: 'Court Fool to Trickster.' },
    { name: "Fighter's Wraps",    rarity: 'common',   notes: 'Pit Fighter to Pugilist.' },
    { name: 'Iron Knuckles',      rarity: 'uncommon', notes: 'Pugilist to Brawler.' },
    { name: 'Iron Collar',        rarity: 'common',   notes: 'War Dog to Armored War Dog.' },
    { name: 'Dwarven Warhammer',  rarity: 'uncommon', notes: 'Dwarf Miner to Hammer Fighter.' },
    { name: 'Blasting Powder',    rarity: 'uncommon', notes: 'Dwarf Miner to Boombuster. 5% misfire.' },
    { name: "Hunter's Spear",     rarity: 'common',   notes: 'Feline Tracker to Spear Dancer.' },
    { name: 'Shadow Wraps',       rarity: 'uncommon', notes: 'Feline Scout to Shadow Stalker.' },
    { name: 'Elven Shortbow',     rarity: 'uncommon', notes: 'Forest Scout to Elven Archer.' },
    { name: 'Twin Daggers',       rarity: 'uncommon', notes: 'Forest Blade to Elven Duelist.' },
    { name: 'Forest Runestone',   rarity: 'rare',     notes: 'Grove Keeper to Elven Arcanist.' },
  ],
  armor: [
    { name: 'Iron Armor',    rarity: 'common',   notes: 'Soldier to Armored Soldier.' },
    { name: 'Plate Armor',   rarity: 'uncommon', notes: 'Armored Soldier to Knight.' },
    { name: 'Doctor\'s Mask', rarity: 'uncommon', notes: 'Toxin Brewer to Plague Doctor.' },
  ],
  contracts: [
    { name: 'Basic Contract',  rarity: 'common',   notes: 'Low catch rate. Cheap — widely available. Used for Humans, Elves, Dwarves, Ashborn, Beastkin. "Terrible pay. No benefits. Dangerous work. Apply within."' },
    { name: 'Silver Contract', rarity: 'uncommon', notes: 'Medium catch rate. Moderate cost. Used for Humans, Elves, Dwarves, Ashborn, Beastkin. "Acceptable wages. Some risk. Reasonable expectations."' },
    { name: 'Gold Contract',   rarity: 'rare',     notes: 'High catch rate. Expensive. Used for Humans, Elves, Dwarves, Ashborn, Beastkin. "Competitive pay. Full equipment provided. Professional terms."' },
    { name: 'Royal Contract',  rarity: 'legendary',notes: '99.99% catch rate. Cannot be purchased — story reward from Mason Winters. One or two per playthrough maximum. "Issued by the Crown. Signed by Mason Winters personally. Refuses no one."' },
    { name: 'Dried Meat',      rarity: 'common',   notes: 'Lure item — War Dog. Rate equivalent to Silver Contract. Weaken first.' },
    { name: 'Silver Trinket',  rarity: 'common',   notes: 'Lure item — Raven. Rate equivalent to Silver Contract. No combat required but health bonus still applies.' },
    { name: 'Silver Bridle',   rarity: 'rare',     notes: 'Lure item — Kelpie. Rate equivalent to Silver Contract. Must weaken below 50% HP first.' },
    { name: 'Black Collar',    rarity: 'rare',     notes: 'Lure item — Black Dog. Rate equivalent to Silver Contract. Specific crossroads, night only.' },
    { name: 'Ancient Coin',    rarity: 'rare',     notes: 'Ritual item — Barrow Wight. Rate equivalent to Silver Contract. Placed at barrow entrance, no health threshold.' },
    { name: 'Glass Lantern',   rarity: 'uncommon', notes: 'Lure item — Will-o\'-Wisp. Rate equivalent to Silver Contract. Must be equipped. Darkness only.' },
    { name: "Stonemason's Chisel", rarity: 'rare', notes: 'Ritual item — Gargoyle. Rate equivalent to Silver Contract. Specific cathedral location, no health threshold.' },
    { name: 'Bowl of Cream',   rarity: 'common',   notes: 'Lure item — Boggart. Rate equivalent to Silver Contract on night 3. ONCE PER GAME. One specific forest shelter. No combat. Pure patience. Soft reset if night 3 fails.' },
  ],
  evolution_tokens: [
    { name: "Knight's Token",    rarity: 'rare',     notes: 'Required: Armored Soldier to Knight.' },
    { name: "Knight's Writ",     rarity: 'rare',     notes: '80,000 gold payment. Required: Armored Soldier to Knight.' },
    { name: "Commander's Seal",  rarity: 'rare',     notes: 'Knight to Knight Commander; Bandit to Mercenary General.' },
    { name: 'Royal Commission',  rarity: 'rare',     notes: 'Race-typed. Knight Commander to King\'s Guard. Terminal.' },
    { name: "Lord's Seal",       rarity: 'rare',     notes: 'From Mason Winters. Knight Commander to Lord Knight.' },
    { name: 'Prayer Beads',      rarity: 'common',   notes: 'Monk to Brother.' },
    { name: "Saint's Relic",     rarity: 'legendary',notes: 'Abbot to Warrior Saint. One per world.' },
    { name: 'Forbidden Tome',    rarity: 'legendary',notes: 'Any undead follower (lvl60+) to Arch Lich. One per game.' },
    { name: 'Hellfire Brand',    rarity: 'rare',     notes: 'Shared: War Dog → Hellhound; Black Dog → Doom Hound.' },
    { name: 'Enchanted Chisel',  rarity: 'rare',     notes: 'Gargoyle to Grotesque.' },
    { name: 'Hearth Stone',      rarity: 'uncommon', notes: 'Boggart to Hobgoblin.' },
    { name: 'Pact Seal',         rarity: 'rare',     notes: 'Hobgoblin to Red Cap.' },
    { name: 'Foxfire Vial',      rarity: 'rare',     notes: "Will-o'-Wisp to Foxfire." },
    { name: 'Refined Charge',    rarity: 'rare',     notes: 'Bombardier upgrade.' },
    { name: 'Stone Crown',       rarity: 'rare',     notes: 'Hammer Fighter to Stone Breaker.' },
    { name: 'War Crest',         rarity: 'rare',     notes: 'Berserker Dwarf upgrade.' },
  ],
  forgeItems: {
    coldIron: {
      name: 'Cold Iron',
      rarity: 'rare',
      description: 'Iron that has never been heated — worked only at room temperature through extraordinary skill. In folklore believed to have protective and binding properties. Required as a base ingredient for all Runesmith legendary forge outputs.',
      foundAt: ['Specific mine locations', 'Deep northern caves', 'Rare dwarven merchant stock'],
      notes: 'Never in ordinary shops. A thorough player finds two or three per playthrough.',
    },
    humanRunesmithPool: [
      { name: 'The Anchor',      type: 'Accessory', effect: 'Carrier survives one fatal hit per dungeon — drops to 1 HP instead of fainting.',                                      description: '"A small iron anchor. Runesmith\'s work. Heavier than it looks." No stats listed. No effect described.', inputs: ['Cold Iron', 'Coffin Iron', 'Ancient Coin'] },
      { name: 'Sundered Blade',  type: 'Weapon',    effect: 'Splits into two — player and one follower both equip it simultaneously. Combined output higher than any single weapon.', description: null, inputs: ['Cold Iron', 'Ancient Sword Shard', 'Dwarf Steel'] },
      { name: "Warden's Edge",   type: 'Weapon',    effect: "Changes type to counter whatever enemy type it last struck. Adapts mid-battle.",                                        description: null, inputs: ['Cold Iron', 'Black Blade', 'Rune Stone'] },
      { name: 'The Unbreakable', type: 'Armor',     effect: 'DEF stat cannot be reduced by status effects or special moves.',                                                         description: null, inputs: ['Cold Iron', 'Plate Scrap', 'Cave Bear Hide'] },
      { name: 'Crown Forged',    type: 'Accessory', effect: 'Mason Winters recognises it on sight. Opens unique dialogue and a story revelation. Passive +10% all stats.',           description: null, inputs: ['Cold Iron', 'Gold Crown Fragment', 'Royal Crest'] },
    ],
    dwarfRuneforgerPool: [
      { name: 'The Foundation',  type: 'Armor',     effect: "Bearer's HP cannot drop below 1 in a single hit. Permanent — not once per dungeon like The Anchor.",                   description: null, inputs: ['Cold Iron', 'Mountain Heart Fragment', 'Ancestral Stone'] },
      { name: 'Deepstone Blade', type: 'Weapon',    effect: 'Earth-type moves deal double damage. Strike moves gain Earth secondary damage.',                                         description: null, inputs: ['Cold Iron', 'Dwarf Steel', 'Cave Stone x3'] },
      { name: "The King's Seal", type: 'Accessory', effect: 'Mason Winters recognises it. Unique dialogue. +15% all stats permanently.',                                             description: null, inputs: ['Cold Iron', 'Royal Crest', 'Gold Crown Fragment'] },
      { name: 'Titan Plate',     type: 'Armor',     effect: 'DEF beyond normal cap. Cannot be moved, stunned, or have position changed.',                                            description: null, inputs: ['Cold Iron', 'Troll Hide', 'Plate Scrap x2'] },
      { name: 'The Last Hall',   type: 'Accessory', effect: 'A fallen hall appears as the battle backdrop. All dwarf followers in party gain +20% all stats.',                      description: 'The most emotionally significant dwarven item. Shows every dwarf in the party their lost home.', notes: 'The most emotionally significant dwarven item. Shows every dwarf in the party their lost home.', inputs: ['Cold Iron', 'Ancient Wood', 'Mountain Heart'] },
    ],
  },
  generalRewards: [
    { name: "Aldric's Aegis",  general: 'Lord Commander Aldric',    type: 'Shield',          forClass: 'Non-Necromancer trial reward', effect: "Holy moves cost 30% less mana. Passive Holy aura damages Shadow attackers. Aldric's final gift to someone he decided was worth protecting.", notes: null },
    { name: "Gregor's Axe",    general: 'Gregor the Unbroken',      type: 'Weapon',          forClass: 'Non-Necromancer trial reward', effect: 'Z-move built in — Unbroken Fury. Hits harder the more wounds the wielder has taken.', notes: null },
    { name: 'Countess Plate',  general: 'The Iron Countess',        type: 'Armor',           forClass: 'Non-Necromancer trial reward', effect: 'DEF stat boosted beyond normal cap. Immune to forced position changes.', notes: null },
    { name: "Maren's Satchel", general: 'Sister Maren',             type: 'Accessory',       forClass: 'Non-Necromancer trial reward', effect: 'Doubles all cooking food bonuses. Party heals 10% HP at start of each battle.', notes: null },
    { name: 'Pale Bow',        general: 'Vaelen the Pale Archer',   type: 'Weapon (ranged)', forClass: 'Non-Necromancer trial reward', effect: 'First shot each battle is guaranteed hit. Critical hit rate doubled at night.', notes: null },
    { name: 'Final Charge',    general: 'Lord Commander Aldric',    type: 'Move (legendary)',forClass: 'Necromancer only — endgame quest', effect: 'Hits all enemies simultaneously. Bonus damage proportional to how many allies have fallen in the current battle. The more that has been lost, the harder it hits.', notes: "John's signature move from the final charge. Aldric watched it and carried it for years." },
  ],
  legendary: [
    { name: 'Crown Writ',         rarity: 'legendary', notes: 'One per game. Lord Knight → Knight of the Realm. Holy/Strike.' },
    { name: "Heart of Forest",    rarity: 'legendary', notes: 'Coven Witch → Green Lady. Eldritch/Toxin/Earth.' },
    { name: 'Forge Heart',        rarity: 'legendary', notes: 'Master Smith → Runesmith. Earth/Strike/Eldritch.' },
    { name: "Collector's Ledger", rarity: 'legendary', notes: 'Bone Keeper → Corpse Collector. Spirit/Earth/Shadow.' },
    { name: 'Crown of Thorns',    rarity: 'legendary', notes: 'Trickster → The Mad King. One per world.' },
    { name: 'Sunfire Gauntlets',  rarity: 'legendary', notes: 'Champion → Ironclad. Fire/Strike.' },
    { name: "Champion's Belt",    rarity: 'rare',      notes: 'Tournament only. Cannot be bought.' },
    { name: 'Royal Talon',        rarity: 'legendary', notes: 'War Eagle → Storm Kite. Flesh/Lightning/Strike.' },
    { name: 'Void Feather',       rarity: 'legendary', notes: 'Shadow Raven → Night Wraith. One per world.' },
    { name: 'Cathedral Heart',    rarity: 'legendary', notes: 'Grotesque → Stone Sentinel. One per world.' },
    { name: 'Void Collar',        rarity: 'legendary', notes: 'Doom Hound → The Harbinger. One per world.' },
    { name: 'Abyssal Tide',       rarity: 'legendary', notes: 'Night Mare → Tide Wraith. One per world.' },
    { name: 'Burial Crown',       rarity: 'legendary', notes: 'Barrow Wight → Barrow King.' },
    { name: 'Soul Lantern',       rarity: 'legendary', notes: 'Foxfire → Corpse Light. One per world.' },
    { name: 'Ancient Bowstring',  rarity: 'legendary', notes: 'Windwalker → Stormcaller. One per world.' },
    { name: 'Eternal Edge',       rarity: 'legendary', notes: 'Bladestorm → The Tempest. One per world.' },
    { name: 'Heart of Grove',     rarity: 'legendary', notes: 'Elder Mage → The Verdant. One per world.' },
    { name: 'Mountain Heart',     rarity: 'legendary', notes: 'Stone Breaker → The Immovable. One per world.' },
    { name: "Ancestor's Axe",     rarity: 'legendary', notes: 'Berserker Dwarf → The Cleaver. One per world.' },
    { name: 'Dragonfire Flask',   rarity: 'legendary', notes: 'Bombardier → The Cannon. One per world.' },
    { name: 'Ancestral Anvil',    rarity: 'legendary', notes: 'Dwarf Smith path → Runeforger. Act 3. Different pool from human Runesmith.' },
    { name: 'Void Charm',         rarity: 'legendary', notes: 'Night Hunter → The Phantom. One per world.' },
    { name: 'Sunfang Lance',      rarity: 'legendary', notes: 'Lance Hunter → The Dawnstrike. One per world.' },
    { name: 'Moonsilver Arrow',   rarity: 'rare',      notes: 'Night only. Windwalker evolution item.' },
    { name: "Panther's Cloak",    rarity: 'rare',      notes: 'Feline Scout chain. Shadow Stalker → Night Hunter.' },
    { name: 'Ashwood Lance',      rarity: 'rare',      notes: 'Pierces frontline protection. Spear Dancer → Lance Hunter.' },
    { name: 'Ancient Tome',       rarity: 'rare',      notes: 'Elven Arcanist → Elder Mage.' },
    { name: 'Silverwind Blades',  rarity: 'rare',      notes: 'Elven Duelist → Bladestorm.' },
    { name: 'Moonwater Vial',     rarity: 'rare',      notes: 'Kelpie → Night Mare.' },
    { name: 'Sunfeather',         rarity: 'rare',      notes: 'Day only. Raven → War Eagle.' },
    { name: 'Night Quill',        rarity: 'rare',      notes: 'Night only. Raven → Shadow Raven.' },
    { name: 'Boulder Hurl (move)',rarity: 'legendary', notes: 'Barbarian only. Ashborn standing stone. "Gregor learned this here. Now you do."' },
    { name: 'Axe Throw (move)',   rarity: 'special',   notes: 'Barbarian only. Found on stone carving in the Midlands.' },
  ],
};

// ── WORLD ───────────────────────────────────────────────────

const WORLD = {
  towns: [
    { name: 'Ashport',       dungeon: null,   lord: null,              notes: 'Starter town. No dungeon. Begins the journey.' },
    { name: 'Millhaven',     dungeon: 'D1',   lord: 'Lord Mesterby',   notes: 'Tutorial dungeon area. Mesterby appears helpful initially.' },
    { name: 'Rivergate',     dungeon: 'D2',   lord: 'Lord Ezra',       notes: 'Engineer lord. Ice puzzle dungeon.' },
    { name: 'Thornwick',     dungeon: 'D3',   lord: 'Lord Mattheus',   notes: 'Corruption begins here.' },
    { name: 'Crestfall',     dungeon: 'D4',   lord: 'Lady Miriam',     notes: 'River crossing, water mechanics.' },
    { name: 'Border Castle', dungeon: 'D5',   lord: 'Human Border Lord (TBD)', notes: 'Southern forest castle. Lord TBD.' },
    { name: 'Elven Grove',   dungeon: 'D6',   lord: 'Elder Erwin',     notes: 'Requires Mesterby betrayal quest completed first.' },
    { name: 'Ashborn Camp / Iron Pass', dungeon: 'D7', lord: 'Kalen', notes: 'Requires full Ashborn arc.' },
    { name: 'Dwarf Mountain',dungeon: 'D8',   lord: 'The Dwarf King',  notes: '3-section dungeon: Outer Gate, Deep Halls, First Hall.' },
    { name: "Winters Keep",  dungeon: 'Final',lord: 'Astaroth',         notes: 'The Hateful Four reside here. Astaroth is the final boss.' },
  ],
  routes: [
    { name: 'Shore Road',      notes: 'Early game — connects coastal areas.' },
    { name: 'Mill Road',       notes: 'Connects Ashport to Millhaven.' },
    { name: 'Forest Road',     notes: 'Dense woodland route — forest creature encounters.' },
    { name: 'River Road',      notes: 'Three bridge troll encounters: Grumble, Old Hag, The Silent One.' },
    { name: 'South Trail',     notes: 'Locked until 3 lord pledges obtained.' },
    { name: 'Midlands Road',   notes: 'Contains the Axe Throw stone carving. Good mid-game route.' },
    { name: 'Scarred Road',    notes: 'Heavily contested route — moderate danger.' },
    { name: 'Northern Pass',   notes: 'Leads toward Ashborn territory and Elven Grove.' },
    { name: 'Frost Road',      notes: 'Cold northern route — ice creature encounters.' },
    { name: 'The Last Road',   notes: 'Longest route. Maximum demon density. One rest point halfway. Named commander encounters.' },
  ],
  bridgeTrolls: [
    { name: 'Grumble',      bridge: 'First Bridge',  demand: '3 gold toll',            notes: 'Straightforward. Pay and pass.' },
    { name: 'Old Hag',      bridge: 'Second Bridge', demand: 'Cooked food',             notes: 'Must bring prepared food, not raw.' },
    { name: 'The Silent One', bridge: 'Third Bridge', demand: 'No dialogue',            notes: 'Does not speak. Hardest encounter of the three.' },
  ],
  dungeons: [
    { id: 'D1', name: 'D1 — Millhaven Dungeon', lord: 'Lord Mesterby',     notes: 'Tutorial dungeon. Mesterby acts as friend. Later revealed as betrayer of Vaelen.' },
    { id: 'D2', name: 'D2 — Rivergate Dungeon', lord: 'Lord Ezra',         notes: 'Engineering-themed. Ice puzzle mechanic.' },
    { id: 'D3', name: 'D3 — Thornwick Dungeon', lord: 'Lord Mattheus',     notes: 'Corruption visible from this point forward.' },
    { id: 'D4', name: 'D4 — Crestfall Dungeon', lord: 'Lady Miriam',       notes: 'River crossing mechanic. Water-based challenges.' },
    { id: 'D5', name: 'D5 — Border Castle',     lord: 'TBD (Border Lord)', notes: 'Southern forest castle. Lord not yet finalised.' },
    { id: 'D6', name: 'D6 — Corrupted Grove',   lord: 'Elder Erwin (pledge)', notes: 'Requires Mesterby betrayal quest completed first.' },
    { id: 'D7', name: 'D7 — Iron Pass',         lord: 'Kalen / Ashborn',   notes: 'Requires full Ashborn arc to be completed.' },
    { id: 'D8', name: 'D8 — Mountain Reclamation', lord: 'Dwarf King',     notes: 'Three sections: Outer Gate → Deep Halls → First Hall.' },
  ],
  demonEncounters: {
    tier1: [
      { name: 'Demon Grunt',           types: ['shadow', 'strike'],          drop: 'Demon Shard',                        notes: 'Most common demon encounter. Dungeons 5–8.' },
      { name: 'Demon Archer',          types: ['shadow', 'strike'],          drop: 'Demon Shard, Dark Arrow',            notes: 'Ranged variant. Targets weakest HP unit.' },
      { name: 'Corrupted Soldier',     types: ['spirit', 'shadow', 'strike'],drop: 'Corrupted Steel',                    notes: 'Fallen kingdom soldier. Still uses defensive stances from life.' },
      { name: 'Demon Hound',           types: ['shadow', 'strike'],          drop: 'Demon Fang, Shadow Hide',            notes: 'Pack encounter — 2 to 3 at once, flanking attacks.' },
      { name: 'Plague Wraith',         types: ['spirit', 'toxin'],           drop: 'Wraith Essence',                     notes: 'Born from great war graves. Poisons every hit.' },
      { name: 'Ember Imp',             types: ['shadow', 'fire'],            drop: 'Ember Shard, Imp Wing',              notes: 'Small, fast, throws fire. Retreats when hit.' },
      { name: 'Bone Walker',           types: ['spirit', 'strike'],          drop: 'Ancient Bone',                       notes: 'Slow, high DEF. Animated old skeleton.' },
    ],
    tier2: [
      { name: 'Shadow Knight',         types: ['shadow', 'strike'],          drop: 'Shadow Plate',                       notes: 'Blocks one hit per battle. Mirrors the Knight follower mechanic.' },
      { name: 'Void Mage',             types: ['shadow', 'eldritch'],        drop: 'Void Crystal',                       notes: 'Teleports to avoid exposure window. Most annoying elite.' },
      { name: 'Corrupted Paladin',     types: ['shadow', 'holy', 'strike'],  drop: 'Corrupted Sacred Blade',             notes: 'Holy typing on a demon. Confuses Holy-heavy parties.' },
      { name: 'Demon Berserker',       types: ['shadow', 'fire', 'strike'],  drop: 'Demon Axe Fragment',                 notes: 'Gets stronger as HP drops. Must be killed quickly.' },
      { name: 'Night Stalker',         types: ['shadow', 'strike'],          drop: 'Shadow Wraps (evolution item)',       notes: 'Invisible until first strike. Night encounters only.' },
      { name: 'Corrupted Undead Captain', types: ['spirit', 'shadow', 'strike'], drop: 'Spirit Steel',                   notes: 'Buffs other undead in encounter. Kill first.' },
      { name: 'Infernal Hound',        types: ['shadow', 'fire', 'strike'],  drop: 'Hellfire Brand (rare evolution item)', notes: 'Pack of 2. Rare Hellfire Brand drop makes this encounter valuable.' },
    ],
    tier3Named: [
      { name: 'Vael the Flayer',       types: ['shadow', 'strike'],          location: 'D5 lieutenant',                  uniqueMechanic: 'Splits into two weaker copies at 50% HP. Both must be defeated.',                                          drop: 'Void Blade fragment' },
      { name: 'The Ashen One',         types: ['shadow', 'fire'],            location: 'D6 lieutenant',                  uniqueMechanic: 'Burns the battlefield at battle start — all non-demon units take fire damage each turn.',               drop: 'Ashen Cloak' },
      { name: 'Mordren the Hollow',    types: ['spirit', 'eldritch'],        location: 'Northern overworld — wandering', uniqueMechanic: 'Cannot be damaged while moving — must be pinned to frontline for 3 consecutive turns.',                 drop: 'Void Crystal x3' },
      { name: 'Sister Vex',           types: ['shadow', 'toxin'],            location: 'D7 lieutenant',                  uniqueMechanic: 'Applies a curse preventing healing for 3 turns on any unit she hits.',                                  drop: 'Corrupted Vial' },
      { name: 'The Bound General',     types: ['shadow', 'strike', 'earth'], location: 'Northern ruins — fixed',         uniqueMechanic: 'Chained in place. Massive range attacks. Cannot be flanked. Drops Commander Seal evolution item.',       drop: "Commander's Seal (evolution item)" },
      { name: 'Kael the Unlit',        types: ['shadow', 'eldritch'],        location: 'Old capital approach',           uniqueMechanic: 'Absorbs Holy Light and Holy moves — converts them to Shadow damage. Holy-heavy parties caught completely off guard.', drop: 'Ancient Darkness Shard' },
    ],
  },
  catchSystem: {
    contracts: [
      { tier: 'Basic Contract',  equivalent: 'Pokéball',     rate: 'Low',    cost: 'Cheap — widely available',                          description: '"Terrible pay. No benefits. Dangerous work. Apply within."',                                          usedBy: 'Humans, Elves, Dwarves, Ashborn, Beastkin' },
      { tier: 'Silver Contract', equivalent: 'Great Ball',   rate: 'Medium', cost: 'Moderate',                                          description: '"Acceptable wages. Some risk. Reasonable expectations."',                                             usedBy: 'Humans, Elves, Dwarves, Ashborn, Beastkin' },
      { tier: 'Gold Contract',   equivalent: 'Ultra Ball',   rate: 'High',   cost: 'Expensive',                                         description: '"Competitive pay. Full equipment provided. Professional terms."',                                        usedBy: 'Humans, Elves, Dwarves, Ashborn, Beastkin' },
      { tier: 'Royal Contract',  equivalent: 'Master Ball',  rate: '99.99%', cost: 'Cannot be purchased — story reward from Mason Winters', description: '"Issued by the Crown. Signed by Mason Winters personally. Refuses no one."', usedBy: 'Anyone', notes: 'One or two per playthrough maximum' },
    ],
    healthThreshold: 'Lower HP always means better catch chance for everything — contracts, lure items, and ritual items alike. Full HP: no bonus. Low HP: moderate bonus. Near death: significant bonus.',
    lureItems: [
      { follower: 'War Dog',      item: 'Dried Meat',                        rate: '= Silver Contract', notes: 'Weaken first' },
      { follower: 'Raven',        item: 'Silver Trinket',                    rate: '= Silver Contract', notes: 'No combat required but health bonus applies' },
      { follower: 'Kelpie',       item: 'Silver Bridle',                     rate: '= Silver Contract', notes: 'Must weaken below 50% HP first' },
      { follower: 'Black Dog',    item: 'Black Collar',                      rate: '= Silver Contract', notes: 'Specific crossroads, night only' },
      { follower: 'Barrow Wight', item: 'Ancient Coin',                      rate: '= Silver Contract', notes: 'Ritual — placed at barrow entrance, no health threshold' },
      { follower: 'Will-o-Wisp', item: 'Glass Lantern (equipped)',           rate: '= Silver Contract', notes: 'Darkness only' },
      { follower: 'Gargoyle',     item: "Stonemason's Chisel",               rate: '= Silver Contract', notes: 'Specific cathedral location ritual — no health threshold' },
      { follower: 'Boggart',      item: 'Bowl of Cream × 3 consecutive nights', rate: '= Silver Contract on night 3', notes: 'ONCE PER GAME. One specific forest shelter. No combat. Pure patience. Soft reset if night 3 fails.' },
    ],
    failedRecruitment: 'A failed attempt does not make a follower permanently hostile. Try again with better contract or return later. Exception: Basic Contract on a clearly high-value follower causes them to leave for one in-game day.',
  },
};

// ── BOSSES ───────────────────────────────────────────────────

const BOSSES = {
  dungeonBosses: [
    {
      name: 'Lord Mesterby',
      dungeon: 'D1 — Millhaven',
      types: ['flesh'],
      notes: 'Friend reference. Tutorial dungeon boss — acts as an ally, helps the player, and joins the coalition. Three betrayals total across the game. Ultimately revealed as the one who gave demons the secret passage to Vaelen\'s blindspot.',
      mechanics: 'Tutorial pacing — introduced as an ally before the reveal.',
    },
    {
      name: 'Lord Ezra',
      dungeon: 'D2 — Rivergate',
      types: ['flesh', 'strike', 'earth'],
      notes: 'Engineer. Has designed the dungeon with ice puzzles. The dungeon itself is as much the challenge as he is.',
      mechanics: 'Ice puzzle dungeon — environmental hazards must be solved before engaging.',
    },
    {
      name: 'Lord Mattheus',
      dungeon: 'D3 — Thornwick',
      types: ['flesh', 'shadow'],
      notes: 'Corruption has visibly taken hold by this point. First dungeon where the demonic influence is undeniable.',
      mechanics: 'Shadow corruption mechanic introduced here.',
    },
    {
      name: 'Lady Miriam',
      dungeon: 'D4 — Crestfall',
      types: ['flesh', 'shadow', 'eldritch'],
      notes: 'River crossing encounter. First female lord boss. Water mechanics throughout the dungeon.',
      mechanics: 'River crossing and water-based environmental combat.',
    },
    {
      name: 'Human Border Lord (TBD)',
      dungeon: 'D5 — Border Castle',
      types: ['flesh'],
      notes: 'Lord not yet finalised. Southern forest castle setting.',
      mechanics: 'TBD',
    },
    {
      name: 'Elder Erwin (Corrupted Grove)',
      dungeon: 'D6 — Elven Grove',
      types: ['eldritch', 'ice'],
      notes: 'Pledge encounter. Requires Mesterby betrayal quest completed first. His son Vaelen died because of Mesterby. He blamed the Mountain (Dwarf King) for years.',
      mechanics: 'Grove corruption. Locked behind Mesterby quest.',
    },
    {
      name: 'Kalen / Ashborn Leaders',
      dungeon: 'D7 — Iron Pass',
      types: ['flesh', 'strike'],
      notes: 'Requires completing the full Ashborn arc. Kalen becomes a pledging lord after the arc — he walks past Mason Winters to reach the player personally at the coalition assembly.',
      mechanics: 'Ashborn arc must be fully completed.',
    },
    {
      name: 'The Dwarf King',
      dungeon: 'D8 — Mountain Reclamation',
      types: ['earth', 'strike'],
      notes: '3-section dungeon. Must clear Outer Gate, Deep Halls, and First Hall before the king.',
      mechanics: 'Three dungeon sections. Underground navigation with Stone Sense.',
    },
  ],
  hatefulFour: [
    {
      number: 1,
      name: 'Zacharias',
      subtitle: 'The Corrupted Paladin',
      types: ['shadow', 'strike', 'holy'],
      location: 'Cathedral Arena',
      notes: 'A paladin who fell to corruption. His Holy typing remains — a remnant of what he was. The cathedral setting mirrors his fallen faith.',
      mechanics: 'Arena combat. Uses corrupted holy abilities alongside shadow strikes.',
      dialogue: null,
    },
    {
      number: 2,
      name: 'Minidiablo & Kristian',
      subtitle: 'The Imp and the Ancient',
      types: ['eldritch', 'shadow', 'fire', 'earth'],
      location: "Kristian's Chamber",
      notes: 'Friend reference (Kristian). Minidiablo is a tiny imp who gives all the orders. Kristian is an enormous ancient demon who simply obeys. RULES: Kristian cannot die while Minidiablo lives. Minidiablo is untargetable while Kristian stands.',
      mechanics: 'Kill Minidiablo first — but you cannot target him until Kristian is down. Kill Kristian, then Minidiablo becomes targetable. (Minidiablo types: Eldritch/Shadow/Fire. Kristian types: Shadow/Strike/Earth.)',
      dialogue: null,
    },
    {
      number: 3,
      name: 'Abaddon',
      subtitle: 'The Ancient Silence',
      types: ['spirit', 'shadow', 'strike'],
      location: "Abaddon's Hall",
      notes: 'Ancient. Silent. Offers no dialogue — not before, during, or after the fight.',
      mechanics: 'No pre-fight dialogue. No post-fight dialogue. Pure encounter.',
      dialogue: null,
    },
    {
      number: 4,
      name: 'Nathaniel',
      subtitle: 'The Herald',
      types: ['shadow', 'eldritch'],
      location: "The Threshold",
      notes: 'The last of the Hateful Four. On death, speaks the only line that matters.',
      mechanics: 'Standard boss encounter. His death triggers the path to Astaroth.',
      dialogue: '"You will never reach him. You will never stop... Astaroth." — first time Astaroth\'s name is spoken in the game.',
    },
  ],
  astaroth: {
    name: 'ASTAROTH',
    subtitle: 'Uber Boss — The Patient One',
    types: ['eldritch'],
    weakness: ['holy'],
    level: 120,
    playerCap: 100,
    ngPlusNote: 'Player level cap raises from 100 to 120 on New Game+.',
    location: "Winters Keep — the old capital",
    phases: [
      { phase: 1, name: 'The Ancient', notes: 'Patient, controlled. He has waited for years. Tests the player methodically.' },
      { phase: 2, name: 'The Throne', notes: 'More aggressive. The stolen crown of King John Winters is present. Personal.' },
      { phase: 3, name: 'The Final Word', notes: 'Full power. The endgame. Eldritch overload.' },
    ],
    openingLine: '"He said my name. He was always loyal."',
    openingContext: 'Spoken in response to Nathaniel\'s dying words. Astaroth heard him name him. He is grateful, in his way.',
    notes: 'Attacked directly. Retreated north with the old capital, waiting for the kingdom to tear itself apart. Ancient and patient. Weak to Holy. Level 120 — 20 levels above the normal player cap.',
  },
};

// ── STORY ───────────────────────────────────────────────────

const STORY = {
  characters: [
    {
      name: 'Mason Winters',
      role: 'Heir to the Throne',
      age: 19,
      status: 'Alive — shipwrecked alongside the player',
      summary: 'Left home as a teenager to rebel against the weight of his birth. Worked as a mercenary across the continent. Carries his father\'s sword style without knowing it — no one told him. Feels crushing guilt over having missed the Demon War. Arrives by shipwreck alongside the player at the start of the game.',
      keyDetails: [
        "Doesn't know he inherited his father's fighting style.",
        'Guilt over the Demon War is a recurring private struggle.',
        "Lord's Seal is held by Mason — key to the Knight of the Realm evolution path.",
        'At the coalition assembly, Kalen walks past Mason to pledge personally to the player — a pointed moment Mason notices.',
      ],
    },
    {
      name: 'King John Winters',
      role: 'The Dead King',
      age: null,
      status: 'Dead — present through fragments only',
      summary: 'Never appears directly. Exists entirely through the traces he left behind: the sword on Mason\'s belt that carries his style, the undelivered letter Aldric still holds, the soldiers who remember his final speech word for word, and the crown Astaroth took from his body.',
      keyDetails: [
        "Best friend of Lord Commander Aldric.",
        "His sword style lives on in Mason, who doesn't know it.",
        'His last request to Aldric was to find Mason. Aldric ignored it.',
        'His crown is in Astaroth\'s possession.',
        'Soldiers remember his last speech with total clarity.',
      ],
    },
    {
      name: 'Lord Commander Aldric',
      role: "King's Champion — The Guilty General",
      age: null,
      status: "Dead — spirit bound at burial site",
      summary: "King John's closest friend and greatest general. John's last request was for Aldric to find Mason and bring him home. Aldric ignored it. He chose instead to charge and die beside his king. He apologised — the letter he wrote was never delivered. It's still on him.",
      keyDetails: [
        "Carries the undelivered note John asked him to deliver to Mason.",
        "Gave the player Final Charge as a move upon being found.",
        "Cannot leave the burial site — bound there.",
        "One tear, one eye, when he apologised — John noticed.",
        "Types: Spirit/Strike/Holy.",
      ],
    },
    {
      name: 'Astaroth',
      role: 'The Uber Boss — The Patient Conqueror',
      age: null,
      status: 'Alive — holding Winters Keep',
      summary: "Ancient. Has waited years. Did not scheme from the shadows — attacked directly, won, then retreated north with the old capital. Has been waiting for the kingdom to destroy itself from within ever since. The crown on his hands belongs to John Winters.",
      keyDetails: [
        "Attacked directly rather than conspiring — patience came after victory, not before.",
        "Holds the old capital (Winters Keep).",
        "Took King John's crown.",
        "Opening line on meeting the player: \"He said my name. He was always loyal.\"",
        "Pure Eldritch. Weak to Holy. Level 120.",
        "Named by Nathaniel — the first time his name is spoken aloud in the game.",
      ],
    },
    {
      name: 'Elder Erwin',
      role: 'Elven Council Elder',
      age: null,
      status: 'Alive — Elven Grove',
      summary: "Elder of the elven council. His son Vaelen chose to fight in the Demon War against elven tradition — and died because of it. Erwin blamed the Dwarf Mountain for years. He was wrong. Mesterby gave the demons the secret passage to Vaelen's blindspot.",
      keyDetails: [
        "Son was Vaelen the Pale Archer.",
        "Blamed the Dwarf King for Vaelen's death — incorrectly.",
        "The truth (Mesterby's betrayal) is revealed through the Mesterby quest.",
        "Dungeon D6 (Corrupted Grove) locked until the Mesterby betrayal quest is complete.",
      ],
    },
    {
      name: 'Vaelen the Pale Archer',
      role: "Erwin's Son — The Betrayed",
      age: null,
      status: "Dead — spirit form available",
      summary: "Chose to fight in the Demon War against elven tradition. Was positioned at a chokepoint — the blindspot in his line was supposed to be sealed. Mesterby gave the demons that exact passage. Vaelen died there. His father blamed the wrong man for years.",
      keyDetails: [
        "Fought out of personal conviction, against his people's customs.",
        "Mesterby's betrayal killed him specifically — it was targeted.",
        "Types in spirit form: Spirit/Ice/Strike.",
        "His death is the emotional core of Erwin's arc.",
      ],
    },
    {
      name: 'Kalen',
      role: 'Young Ashborn Warrior — Future Chief',
      age: null,
      status: 'Alive — Ashborn Camp',
      summary: "Young Ashborn warrior who wants to honour the legacy of Gregor the Unbroken. Becomes Ashborn chief after the arc concludes. At the coalition assembly, walks past Mason Winters — the nominal heir to the throne — to pledge personally to the player. It's a deliberate choice.",
      keyDetails: [
        "Motivated by Gregor's memory.",
        "Becomes chief after the Ashborn arc.",
        "At the coalition assembly, explicitly walks past Mason to reach the player first.",
        "Barbarian class is unlocked by completing his arc.",
      ],
    },
    {
      name: 'Lord Mesterby',
      role: 'The Traitor',
      age: null,
      status: 'Alive — becomes boss',
      summary: "Appears throughout the early game as a helpful ally. Joins the coalition. Seems trustworthy. Has betrayed three times. Most critically: gave demons the secret passage to Vaelen's blindspot during the Demon War. This single act killed Vaelen, broke Erwin's family, and falsely blamed the Dwarf King for years.",
      keyDetails: [
        "Three betrayals total — all revealed across the story.",
        "Joins the coalition as an apparent ally.",
        "Becomes a dungeon boss when the truth is revealed.",
        "His dungeon (D1, Millhaven) is revisited.",
        "Gave demons Vaelen's blindspot — the act that drives Erwin's arc.",
      ],
    },
    {
      name: 'Gregor the Unbroken',
      role: 'Ashborn Chief — The Legend',
      age: null,
      status: "Dead — spirit form available",
      summary: "The Ashborn chief before Kalen. Died from a thousand wounds — not one killing blow, but the accumulated weight of every battle he refused to retreat from. His legend drives Kalen.",
      keyDetails: [
        "Died from a thousand wounds accumulated in battle.",
        "His standing stone in the Ashborn territory teaches Boulder Hurl to the Barbarian.",
        "Spirit type: Spirit/Strike.",
        "His death defines the Ashborn culture Kalen inherits.",
      ],
    },
  ],

  storyBeats: [
    { title: 'Shipwreck Arrival', beat: 'The player and Mason Winters arrive by shipwreck at Ashport. Neither knows the other. They share the shore and the strange circumstance of survival.' },
    { title: 'The Tutorial Lord', beat: "Mesterby is helpful, warm, and clearly on the player's side. He joins the coalition early. Everything about him reads as trustworthy." },
    { title: 'Corruption Spreads', beat: "By D3 (Mattheus), the demonic corruption is impossible to ignore. The pattern of the lords' fall becomes visible." },
    { title: "Erwin's Grief", beat: "Unlocking the Elven Grove requires completing the Mesterby betrayal quest first — because Erwin's willingness to trust humans depends on learning who actually betrayed his son." },
    { title: "The Ashborn Arc", beat: "Kalen's story: honouring Gregor, finding the path forward, becoming chief. Unlocks the Barbarian class and D7." },
    { title: "Three Betrayals", beat: "Mesterby's betrayals are revealed incrementally — none at once. Each revelation reframes earlier events." },
    { title: "The Coalition Assembly", beat: "Lords gather to pledge. Kalen enters, walks past Mason Winters — the king's heir — and pledges directly to the player. A beat Mason notices and says nothing about." },
    { title: "Nathaniel's Last Words", beat: '"You will never reach him. You will never stop... Astaroth." — The first time the final boss\'s name is spoken in the game. The weight of it is in how long it was withheld.' },
    { title: "Aldric's Letter", beat: "Finding Lord Commander Aldric at his burial site. He gives the player the letter he never delivered to Mason. He gives Final Charge. He cannot follow. He cannot leave." },
    { title: 'Astaroth', beat: '"He said my name. He was always loyal." — Astaroth heard Nathaniel name him with his last breath. This is how he greets you. He is not surprised. He has been waiting.' },
  ],

  lordBackgrounds: [
    {
      lord: 'Lord Mesterby',
      house: 'House Mesterby',
      location: 'Millhaven — harbor town',
      background: "Friend reference. The smallest noble house. Appears as tutorial ally — warm, helpful, grateful. Joins the coalition early. Three betrayals total: (1) During the Demon War, gave demons the secret passage to Vaelen's blindspot. (2) Joined Mason's coalition while feeding information to demon remnants. (3) Attempted betrayal of Mason when discovered. Becomes a boss when the truth is revealed. His signature boss move uses knowledge of how the player fights, learned by watching them clear his dungeon.",
      coalitionContribution: 'Harbor access — sea trade routes reopened',
      betrayer: true,
    },
    {
      lord: 'Lord Edmund Harrington',
      house: 'House Harrington',
      location: 'Rivergate — harbor town',
      background: "Former Hand of the King — served John Winters for most of his reign. House Harrington is famous not for warriors but for intelligence, diplomacy, and administration. Edmund kept the kingdom functioning while John fought its wars. When the Demon War came he advised retreat and consolidation. John charged anyway. Edmund has lived with that ever since. His eldest son is named John — named after the king his father served.",
      coalitionContribution: 'Sea trade access, administrative expertise, legitimacy of oldest house pledging',
      betrayer: false,
    },
    {
      lord: 'Lord Cassius Gold',
      house: 'House Gold',
      location: 'Crestfall — southern midlands',
      background: "The wealthy house. Gold deposits in the southern midlands built four generations of wealth into the best-equipped private army in the region. Cassius is transactional — he will pledge but wants something specific in return. A trade agreement, exclusive mining rights after the war, a seat on whatever council Mason forms. He calculated the Demon War odds and preserved his army. He is not ashamed of this.",
      coalitionContribution: 'Gold reserves, professional well-equipped soldiers, supply chain expertise',
      betrayer: false,
    },
    {
      lord: 'Lord Aldous Ironwood',
      house: 'House Ironwood',
      location: 'Thornwick — northern midlands forest',
      background: "The forest warden. The Ironwood forest grows trees harder than oak and more flexible than iron — shields, arrows, and spear shafts made from it are unmatched. House Ironwood has defended this resource for centuries through knowledge rather than numbers. Aldous is quiet, precise, professionally loyal. The demons want the Ironwood for their own weapons.",
      coalitionContribution: 'Superior equipment materials, Ironwood weapons and shields, forest knowledge',
      betrayer: false,
    },
    {
      lord: 'Lord Gareth Mountain',
      house: 'House Mountain',
      location: 'Border Castle — closest to Winters Keep',
      background: "The old rival house. House Mountain and House Winters have been neighbours, competitors, and occasional enemies for generations. Gareth's father and John Winters ended the rivalry — wary allies rather than friends. Gareth fought in the Demon War. He will not trust Mason easily. He also carries unexplained suspicion from the elves for years — accused of something he did not do. The Mesterby betrayal quest clears his name with Elder Erwin.",
      coalitionContribution: 'Border troops, strategic territory closest to Winters Keep, the legitimacy of the old rival pledging',
      betrayer: false,
    },
    {
      lord: 'Elder Erwin',
      house: 'Elven Council',
      location: 'Elven Grove — deep southern forest',
      background: "Eldest of the elven council. Has watched kingdoms rise and fall for centuries. His son Vaelen chose to fight in the Demon War against elven tradition — and died because Mesterby gave the demons the secret passage to his blindspot. Erwin blamed Lord Mountain for years. He was wrong. His dungeon D6 is locked until the Mesterby betrayal quest is complete. His pledge is personal rather than political.",
      coalitionContribution: 'Elven fighters, forest knowledge, ancient magic, symbolic weight of the forest joining the kingdom',
      betrayer: false,
    },
    {
      lord: 'Kalen (The Ashborn)',
      house: 'Ashborn Tribe',
      location: 'Iron Pass — southern mountains',
      background: "Young Ashborn warrior who wanted to honour Gregor. Becomes chief after defeating the veteran in the tribal conflict. His pledge is given on the field, not in a hall. At the coalition assembly walks past Mason Winters to reach the player — in Ashborn culture loyalty flows to the person who earned it, not to titles. Mason says nothing. He understands.",
      coalitionContribution: 'Ashborn warriors who chose to march, Iron Pass strategic route, the most committed fighters in the coalition',
      betrayer: false,
    },
    {
      lord: 'The Dwarf King',
      house: 'Dwarf Mountain Kingdom',
      location: 'Dwarf Mountain — northern reclamation',
      background: "Has been leading his people in exile since the Demon King took the mountain halls. Not just a king without a throne — a king who kept the culture, the traditions, and the identity of his people alive in refugee camps for years. His dungeon D8 is a three-section arc: Outer Gate, Deep Halls, First Hall. His pledge is a war oath — absolute commitment from a people who have the most to gain from Astaroth's defeat.",
      coalitionContribution: 'Dwarf warriors, engineering expertise, access to northern mountain routes',
      betrayer: false,
    },
  ],

  mesteryBetrayalArc: {
    summary: "Lord Mesterby is the Pale Archer's betrayer. During the Demon War he gave demon scouts the location of a secret passage leading to a blindspot behind Vaelen's position. Vaelen died. Suspicion fell on Lord Mountain for years. Mountain is innocent.",
    threeBetravals: [
      { number: 1, title: 'Vaelen the Pale Archer',     description: "During the Demon War, gave demons the location of a secret passage to Vaelen's blindspot. Vaelen died because Mesterby drew a map for a promise of safety that never arrived." },
      { number: 2, title: 'The Player',                  description: "Joined Mason's coalition while feeding information to demon remnants. His gratitude was genuine — that is the hardest part. He truly liked the player. He joined meaning it." },
      { number: 3, title: 'Mason Winters (attempted)',   description: 'When discovered, fled or fought rather than face judgment. Became a boss encounter.' },
    ],
    evidence: [
      "Primary: demon commander records listing informants — Mesterby's house seal against an entry describing the passage and the date.",
      "Secondary: a demon artifact hidden in Mesterby's castle — the payment for his information. No quest marker. Reward for thorough players.",
    ],
    masonChoice: ['Execute — justice, clean, final', 'Imprison — let him live with it', 'Exile — removed from the kingdom entirely'],
    mesterbySeal: 'The player can keep or discard the Mesterby Family Seal after the revelation. No mechanical difference. A personal choice about what the object means now.',
    cascadeEffects: "Completing the Mesterby betrayal quest unlocks both Elder Erwin's pledge (D6) and clears Lord Mountain of false suspicion.",
  },

  kalenArc: {
    summary: 'The Ashborn tribe has no leader after Gregor died. Two candidates. The player backs Kalen.',
    kalenCharacter: 'Young. Certain rather than reckless. Burns with grief over Gregor. Wants to honour what Gregor chose. Does not ask for help — accepts it when offered.',
    veteranCharacter: "Older. Has counted the absences since the Demon War. Thinks Kalen will get more Ashborn killed for a kingdom that already spent them once. Not wrong about the fear. Wrong about what to do with it. Breaks tradition by bringing a full party to what should be single combat.",
    arcBeats: [
      { stage: 'Arrival',         description: 'Tribe visibly split. Two camps, two fires. Kalen approaches the player directly.' },
      { stage: 'Training Fights', description: 'Multiple battles against Kalen, each harder than the last. He gets measurably better each time. The relationship builds through fighting.' },
      { stage: 'Trials',          description: 'TBD — survival element, hunt, and character test. Should feel distinctly Ashborn.' },
      { stage: 'The Skirmish',    description: 'Veteran arrives with full party. Kalen fights and falls wounded. Player steps in with depleted party. Veteran as a proper boss — harder because the player is already worn down.' },
      { stage: 'The Finish',      description: 'When veteran is close to falling — Kalen gets up. Wounded. Helps kill him. Title taken, not given.' },
      { stage: 'The Pledge',      description: '"When the time comes — I will be there. My people will be there." Given on the field. To the player. Not to Mason.' },
    ],
    ironPassDungeon: "After the skirmish, Kalen leads the assault on the Iron Pass — his first act as Ashborn chief. Reclaiming Ashborn territory from demons.",
    afterIronPass: 'Kalen cannot march immediately. Rebuilds the fractured tribe. Arrives at coalition assembly when Mason calls.',
    coalitionAssembly: 'Walks past Mason Winters to reach the player. Not disrespect — in Ashborn culture loyalty flows to who earned it. His line: "We are ready." Mason says nothing. He understands.',
    barbarianUnlock: 'Barbarian class unlocks after completing this arc. Available at any inn from that point. Available from character creation on NG+.',
    ashbornFollowers: 'Ashborn warriors become recruitable after the Iron Pass is cleared. Combat-based recruitment — no contracts. Defeat them, impress them, they choose to follow.',
  },

  johnWintersLastSpeech: {
    context: 'John Winters, badly wounded, surrounded by his last soldiers. The battle already lost. He gathers his last strength.',
    speech: [
      '"Brothers — gather."',
      '"This is where we stand. Right here. One last time."',
      '"Do not do it for me. Do it for the person waiting for you at home. Do it for every man who already fell today. Do it so that what we are — what this kingdom IS — survives past this field."',
      '"Show them what honour looks like."',
      '"FOR THE KINGDOM."',
      '"CHARGE."',
    ],
    note: 'He pauses. Just his breathing in the silence — between the last line before CHARGE and CHARGE itself.',
    aldricNote: 'Aldric was given a note: "Aldric my friend — find my son. Reclaim the Kingdom." He did not follow the request. He charged instead. The note was never delivered. It remains on his body at the burial site.',
  },

  openQuestions: [
    { question: "Astaroth's words to John Winters before the killing blow — the most significant line in the game." },
    { question: "What John wrote in the undelivered note to Mason — stays between father and son." },
    { question: "Vaelen's exact request to the player after learning the truth about Mesterby." },
    { question: "What Mesterby says when he falls — sad more than villainous." },
    { question: "The veteran's name in the Ashborn arc." },
    { question: "The specific Ashborn trial structure beyond combat." },
    { question: "The Dwarf King's name." },
    { question: "The Human Border Lord of the south — name and backstory." },
    { question: "The ending scene — what Mason says, the final image." },
  ],
};

// ── TYPE DISPLAY HELPERS ────────────────────────────────────

const TYPE_CLASS = {
  flesh: 't-flesh', strike: 't-strike', shadow: 't-shadow',
  fire: 't-fire', ice: 't-ice', earth: 't-earth',
  spirit: 't-spirit', holy: 't-holy', toxin: 't-toxin',
  eldritch: 't-eldritch', lightning: 't-lightning',
};

function renderTypes(types) {
  if (!types || types.length === 0) return '';
  return `<div class="types">${types.map(t =>
    `<span class="type-badge ${TYPE_CLASS[t] || ''}">${t}</span>`
  ).join('')}</div>`;
}

function renderStatFill(fill, value) {
  return `
    <div class="stat-row">
      <span class="stat-label">${fill.label}</span>
      <div class="stat-bar"><div class="stat-fill ${fill.fill}"></div></div>
      <span class="stat-value">${value}</span>
    </div>`;
}

// ── EXPORT CHECK ────────────────────────────────────────────
// All data available globally: CLASSES, FOLLOWER_CHAINS, ITEMS, WORLD, BOSSES, STORY
// Helper functions: renderTypes(types), TYPE_CLASS
