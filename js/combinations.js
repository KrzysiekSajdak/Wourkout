//https://www.ringsport.com.au/blogs/ringsport-blog/24-punching-combinations-that-work

var jab = "Jab";
var cross = "Cross";
var leftHook = "Left Hook";
var leftUppercut = "Left Uppercut";
var rightHook = "Right Hook";
var rightUppercut = "Right Uppercut";

var punchesCombinations = [
    [jab, jab],
    [jab, cross],
    [jab, jab, cross],
    [jab, cross, jab],
    [jab, cross, leftHook],
    [jab, cross, leftHook, cross],
    [jab, cross, leftUppercut],
    [jab, leftHook],
    [jab, leftHook, cross, leftHook],
    [jab, cross, leftUppercut, cross],
    [jab, rightUppercut, leftHook, cross],
    [cross, leftHook, cross]
];

var punches = [
    jab,
    cross,
    leftHook,
    leftUppercut,
    rightHook,
    rightUppercut
];

var kicks = [
    [jab, jab],
    [jab, cross],
    [jab, cross, leftHook]
];