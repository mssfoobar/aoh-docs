/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    overview: [
        {
            type: "autogenerated",
            dirName: "10_overview",
        },
    ],
    development: [
        {
            type: "autogenerated",
            dirName: "20_development",
        },
    ],
    deployment: [
        {
            type: "autogenerated",
            dirName: "30_deployment",
        },
    ],
    web: [
        {
            type: "autogenerated",
            dirName: "40_web",
        },
    ],
    iam: [
        {
            type: "autogenerated",
            dirName: "50_iam",
        },
    ],
    ucs: [
        {
            type: "autogenerated",
            dirName: "60_ucs",
        },
    ],
    gis: [
        {
            type: "autogenerated",
            dirName: "70_gis",
        },
    ],
    rnr: [
        {
            type: "autogenerated",
            dirName: "80_rnr",
        },
    ],
    wfe: [
        {
            type: "autogenerated",
            dirName: "90_wfe",
        },
    ],
};

module.exports = sidebars;
