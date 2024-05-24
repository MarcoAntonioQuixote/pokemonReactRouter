import React from 'react'
import { useParams } from 'react-router-dom'

function SongPage() {

    const {artist,song} = useParams();

  return (
    <div>You want to listen to {song} from {artist}</div>
  )
}

export default SongPage