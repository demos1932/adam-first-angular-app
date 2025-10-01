
export enum CourseCategory {
  All = 'all',
  Java = 'java',
  Vue = 'vue',
  Python = 'python',
  Angular = 'angular',
  React = 'react',
  Go = 'go',
  CPlusPlus = 'c++',
  CSharp = 'c#',
  Ruby = 'ruby',
  PHP = 'php',
  Swift = 'swift',
  Kotlin = 'kotlin',
  Rust = 'rust',
  Scala = 'scala',
  Perl = 'perl',
  Lua = 'lua',
  ObjectiveC = 'objective-c',
  MATLAB = 'matlab',
  Groovy = 'groovy',
  Erlang = 'erlang',
  COBOL = 'cobol'
}

export interface Course {
  id: number;
  title: string;
  description: string;
  category: CourseCategory;
  imageUrl: string;
  price: number;
}
