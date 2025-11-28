import { FC } from 'react'
import { parse } from 'yaml'
import * as fs from 'node:fs'
import path from 'path'
import HomeSceneClient from './HomeSceneClient'

const HomeScene: FC = () => {
  const SceneYaml = fs.readFileSync(
    path.join(process.cwd(), 'src/app/(home)/home-scene.yaml'),
    'utf8'
  )
  const SceneJSON = parse(SceneYaml)
  console.log(SceneJSON)



  return <HomeSceneClient />
}

export default HomeScene
