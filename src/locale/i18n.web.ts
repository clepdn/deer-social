import {useEffect} from 'react'
import {i18n} from '@lingui/core'

import {sanitizeAppLanguageSetting} from '#/locale/helpers'
import {AppLanguage} from '#/locale/languages'
import {useLanguagePrefs} from '#/state/preferences'

/**
 * We do a dynamic import of just the catalog that we need
 */
export async function dynamicActivate(locale: AppLanguage) {
  let mod: any

  switch (locale) {
    case AppLanguage.an: {
      mod = await import(`./locales/an/messages.po`)
      break
    }
    case AppLanguage.ast: {
      mod = await import(`./locales/ast/messages.po`)
      break
    }
    case AppLanguage.ca: {
      mod = await import(`./locales/ca/messages.po`)
      break
    }
    case AppLanguage.cy: {
      mod = await import(`./locales/cy/messages.po`)
      break
    }
    case AppLanguage.da: {
      mod = await import(`./locales/da/messages.po`)
      break
    }
    case AppLanguage.de: {
      mod = await import(`./locales/de/messages.po`)
      break
    }
    case AppLanguage.el: {
      mod = await import(`./locales/el/messages.po`)
      break
    }
    case AppLanguage.en_GB: {
      mod = await import(`./locales/en-GB/messages.po`)
      break
    }
    case AppLanguage.eo: {
      mod = await import(`./locales/eo/messages.po`)
      break
    }
    case AppLanguage.es: {
      mod = await import(`./locales/es/messages.po`)
      break
    }
    case AppLanguage.eu: {
      mod = await import(`./locales/eu/messages.po`)
      break
    }
    case AppLanguage.fi: {
      mod = await import(`./locales/fi/messages.po`)
      break
    }
    case AppLanguage.fr: {
      mod = await import(`./locales/fr/messages.po`)
      break
    }
    case AppLanguage.fy: {
      mod = await import(`./locales/fy/messages.po`)
      break
    }
    case AppLanguage.ga: {
      mod = await import(`./locales/ga/messages.po`)
      break
    }
    case AppLanguage.gd: {
      mod = await import(`./locales/gd/messages.po`)
      break
    }
    case AppLanguage.gl: {
      mod = await import(`./locales/gl/messages.po`)
      break
    }
    case AppLanguage.hi: {
      mod = await import(`./locales/hi/messages.po`)
      break
    }
    case AppLanguage.hu: {
      mod = await import(`./locales/hu/messages.po`)
      break
    }
    case AppLanguage.ia: {
      mod = await import(`./locales/ia/messages.po`)
      break
    }
    case AppLanguage.id: {
      mod = await import(`./locales/id/messages.po`)
      break
    }
    case AppLanguage.it: {
      mod = await import(`./locales/it/messages.po`)
      break
    }
    case AppLanguage.ja: {
      mod = await import(`./locales/ja/messages.po`)
      break
    }
    case AppLanguage.km: {
      mod = await import(`./locales/km/messages.po`)
      break
    }
    case AppLanguage.ko: {
      mod = await import(`./locales/ko/messages.po`)
      break
    }
    case AppLanguage.ne: {
      mod = await import(`./locales/ne/messages.po`)
      break
    }
    case AppLanguage.nl: {
      mod = await import(`./locales/nl/messages.po`)
      break
    }
    case AppLanguage.pl: {
      mod = await import(`./locales/pl/messages.po`)
      break
    }
    case AppLanguage.pt_BR: {
      mod = await import(`./locales/pt-BR/messages.po`)
      break
    }
    case AppLanguage.pt_PT: {
      mod = await import(`./locales/pt-PT/messages.po`)
      break
    }
    case AppLanguage.ro: {
      mod = await import(`./locales/ro/messages.po`)
      break
    }
    case AppLanguage.ru: {
      mod = await import(`./locales/ru/messages.po`)
      break
    }
    case AppLanguage.sv: {
      mod = await import(`./locales/sv/messages.po`)
      break
    }
    case AppLanguage.th: {
      mod = await import(`./locales/th/messages.po`)
      break
    }
    case AppLanguage.tr: {
      mod = await import(`./locales/tr/messages.po`)
      break
    }
    case AppLanguage.uk: {
      mod = await import(`./locales/uk/messages.po`)
      break
    }
    case AppLanguage.vi: {
      mod = await import(`./locales/vi/messages.po`)
      break
    }
    case AppLanguage.zh_CN: {
      mod = await import(`./locales/zh-CN/messages.po`)
      break
    }
    case AppLanguage.zh_HK: {
      mod = await import(`./locales/zh-HK/messages.po`)
      break
    }
    case AppLanguage.zh_TW: {
      mod = await import(`./locales/zh-TW/messages.po`)
      break
    }
    default: {
      mod = await import(`./locales/en/messages.po`)
      break
    }
  }

  i18n.load(locale, mod.messages)
  i18n.activate(locale)
}

export function useLocaleLanguage() {
  const {appLanguage} = useLanguagePrefs()
  useEffect(() => {
    const sanitizedLanguage = sanitizeAppLanguageSetting(appLanguage)

    document.documentElement.lang = sanitizedLanguage
    dynamicActivate(sanitizedLanguage)
  }, [appLanguage])
}
