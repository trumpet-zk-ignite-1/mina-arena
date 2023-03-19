type Player = {
  id: number;
  name: string;
  minaPublicKey: string;
}

type Game = {
  id: number;
  status?: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELED';
  turnNumber?: number;
  currentPhase?: GamePhase;
  gamePlayers?: Array<GamePlayer>;
  gamePieces?: Array<GamePiece>;
  arena?: {
    width: number;
    height: number;
  }
}

type GamePiece = {
  id: number;
  gamePlayer: GamePlayer;
  playerUnit: PlayerUnit;
  coordinates: {
    x: number;
    y: number
  }
  health: number;
}

type GamePhase = {
  id: number;
  name: string;
  gamePlayer: {
    player: {
      minaPublicKey: string;
    }
  }
  gamePieceActions: {
    id: number;
    gamePiece: {
      id: number;
    }
    actionType: 'MOVEMENT'
  }
}

type GamePlayer = {
  player: Player;
  gamePieces?: [{
    gamePlayer: GamePlayer;
    playerUnit: PlayerUnit;
    coordinates: {
      x: number;
      y: number
    }
    health: number;
  }]
}

type Unit = {
  id: number;
  name: string;
  attackPower: number;
  armor: number;
  maxHealth: number;
  movementSpeed: number;
};

type Draftee = {
  unit: Unit;
  name: string;
  player: string;
}

type PlayerUnit = {
  id: number;
  player: Player;
  name: string;
  unit: Unit;
};

type Squad = {
  units: Draftee[];
  playerUnits: PlayerUnit[];
}

type CreateGamePieceInput = {
  playerUnitId: number
} | {
  createPlayerUnit: {
    unitId: number,
    name: string
  }
}

type DrawnPiece = {
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
};

type MoveAction = {
  gamePieceId: number
  action: {
    moveFrom: {
      x: number;
      y: number;
    },
    moveTo: {
      x: number;
      y: number;
    }
  }
}