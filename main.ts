basic.showLeds(`
    # . # # #
    # . # . #
    # . # . #
    # . # . #
    # . # # #
    `)
basic.pause(5000)
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        basic.pause(1000)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 195)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 200)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 40)
        basic.pause(1000)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 40)
        basic.pause(1000)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        basic.pause(1000)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
