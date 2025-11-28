import { FC } from 'react'
import { parse } from 'yaml'
import * as fs from 'node:fs'
import path from 'path'
import HomeSceneClient from './HomeSceneClient'
import { Vector2d } from 'konva/lib/types'

interface HomeSceneProps {
  scale?: number | Vector2d
}

const HomeScene: FC<HomeSceneProps> = ({ scale }) => {
  const SceneYaml = fs.readFileSync(
    path.join(process.cwd(), 'src/app/(home)/home-scene.yaml'),
    'utf8'
  )
  const SceneJSON = parse(SceneYaml)

  // Pass the parsed YAML to the client component
  // The client component will use the parser with its refs
  return <HomeSceneClient sceneYAML={SceneJSON} scale={scale} />
  // return <HomeSceneClient />
}

export default HomeScene
