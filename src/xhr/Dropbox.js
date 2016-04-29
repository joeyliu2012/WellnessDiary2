export default class Dropbox {
  constructor(token) {
    this.token = token
  }

  getItem(key) {
    return fetch('https://content.dropboxapi.com/2/files/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/octet-stream',
        Authorization: `Bearer ${this.token}`,
        'Dropbox-API-Arg': JSON.stringify({
          path: `/${key}.json`,
        }),
      },
    })
    .then(r => {
      if (r.ok) return r.json()
      return null
    })
  }

  setItem(key, value) {
    return fetch('https://content.dropboxapi.com/2/files/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/octet-stream',
        Authorization: `Bearer ${this.token}`,
        'Dropbox-API-Arg': JSON.stringify({
          path: `/${key}.json`,
          mode: 'overwrite',
          mute: true,
        }),
      },
      body: typeof value === 'string' ? value : JSON.stringify(value),
    })
    .then(r => {
      if (r.ok) return r.json()
      return null
    })
  }

}
