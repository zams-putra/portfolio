## porto the port of porto

- buset lah selama ini deploy pake github sync ke netlify
- mending pake netlify cli tau gitu mah


## step :
- tinggal :
```bash
netlify login
netlify link
[set ke project name, taruh aja]
npm run build
netlify deploy --prod --dir=dist
```
