/**
 * useSocials — reactive social link config from Firestore.
 *
 * Firestore path: config/socials
 * Expected fields (all optional, fallbacks used when absent):
 *   github    : string  — e.g. "https://github.com/matifanger"
 *   linkedin  : string  — e.g. "https://www.linkedin.com/in/matifanger/"
 *   whatsapp  : string  — e.g. "https://wa.link/aq1xfn"
 *   twitter   : string  — e.g. "https://x.com/matifanger"
 *   resume    : string  — e.g. "https://docs.google.com/..."
 *
 * Create / edit the doc directly in the Firebase Console to update links
 * across the whole site without touching code.
 */

import { doc } from 'firebase/firestore'
import { useDocument } from 'vuefire'

interface SocialLinks {
  github?: string
  linkedin?: string
  whatsapp?: string
  twitter?: string
  resume?: string
}

const DEFAULTS: Required<SocialLinks> = {
  github: 'https://github.com/matifanger',
  linkedin: 'https://www.linkedin.com/in/matifanger/',
  whatsapp: 'https://wa.link/aq1xfn',
  twitter: 'https://x.com/matifanger',
  resume: 'https://docs.google.com/document/d/1oaj5P1ypOKg-6j3iqS_rd8wTh-drhNomE-Q_sYc0rqQ/edit?usp=drive_link',
}

export function useSocials() {
  const db = useFirestore()
  const data = useDocument<SocialLinks>(doc(db, 'config', 'socials'))

  return computed(() => ({
    github: data.value?.github || DEFAULTS.github,
    linkedin: data.value?.linkedin || DEFAULTS.linkedin,
    whatsapp: data.value?.whatsapp || DEFAULTS.whatsapp,
    twitter: data.value?.twitter || DEFAULTS.twitter,
    resume: data.value?.resume || DEFAULTS.resume,
  }))
}
