const modelName = `[App]`;

export class Get {
    static readonly type = `${modelName} Get`;
}
export class GetPosts {
  static readonly type = `${modelName} GetPosts`;
}

export class GetPost {
  static readonly type = `${modelName} GetPost`;
  constructor(public postId: string) {}
}

export class EditPost {
  static readonly type = `${modelName} EditPost`;
  constructor(public postId: string, public payload: any) {}
}

export class AddPost {
  static readonly type = `${modelName} AddPost`;
  constructor( public payload: any) {}
}
