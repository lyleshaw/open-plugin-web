/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly HTTPS_PROXY: string
  readonly HEAD_SCRIPTS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
