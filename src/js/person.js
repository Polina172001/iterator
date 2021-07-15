// eslint-disable-next-line max-classes-per-file
const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Не корректная длина name');
    }
    if (!types.includes(type)) {
      throw new Error('Нет такого типа');
    }
    switch (type) {
      case 'Bowman':
        this.attack = 25;
        this.defence = 25;
        break;
      case 'Daemon':
        this.attack = 10;
        this.defence = 40;
        break;
      case 'Magician':
        this.attack = 10;
        this.defence = 40;
        break;
      case 'Swordsman':
        this.attack = 40;
        this.defence = 10;
        break;
      case 'Undead':
        this.attack = 25;
        this.defence = 25;
        break;
      case 'Zombie':
        this.attack = 40;
        this.defence = 10;
        break;
      default:
        break;
    }
    this.health = 100;
    this.level = 1;
    this.name = name;
    this.type = type;
  }
}

export class Team {
  constructor([...persons]) {
    this.team = persons;
    // console.log(persons)
  }

  // eslint-disable-next-line class-methods-use-this
  [Symbol.iterator]() {
    // eslint-disable-next-line no-console
    console.log('iterator');
    const {
      team,
    } = this;
    let current;
    return {
      next() {
        current = current === undefined ? 0 : current + 1;

        return {
          done: current >= team.length,
          value: team[current],
        };
      },
    };
  }
}
