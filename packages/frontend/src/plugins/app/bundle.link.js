import React from 'react'
import Link from 'found/lib/Link'

function LinkItem(props) {
  return (
    <li>
      <Link
        {...props}
        activeStyle={{fontWeight: 'bold'}}
      />
    </li>
  )
}

ext.point('app.jsx').extend({
  id: 'linkItem',
  linkItem: () => LinkItem,
  linkItems: (links) => {
    for (let i = 0, len = links.length; i < len; i++) 
      links[i] = <LinkItem key={i} {...links[i]} />
    return links
  },
})
