// http://danger.systems/js/tutorials/dependencies.html
import {danger, schedule, fail, warn} from 'danger'
import includes from 'lodash.includes'

function checkYarnLock() {
  schedule(async () => {
    const packageDiff = await danger.git.JSONDiffForFile('package.json')

    if (packageDiff.dependencies || packageDiff.devDependencies) {
      const hasLockfileChanges = includes(danger.git.modified_files, 'yarn.lock')
      if (!hasLockfileChanges) {
        warn('There are "package.json" dependency changes with no "yarn.lock" changes')
      }
    }
  })
}
