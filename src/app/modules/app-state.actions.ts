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
