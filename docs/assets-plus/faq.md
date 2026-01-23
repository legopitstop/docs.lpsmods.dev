---
title: Frequently Asked Questions | Assets+ Wiki
description: Frequently asked questions about Assets+
prev: false
next: false
---

# Frequently Asked Questions

Below are answers to questions you might have.

## What is `Assets+`?

**Assets+** is a Minecraft Add-On that adds a library of common Bedrock Edition assets and additional block texture IDs to support other Add-Ons and behavior/resource packs. it doesn't add gameplay features on its own but is used as a dependency to make vanilla textures easier to use and unlock more block visuals for other Add-Ons.

## What version of Assets+ do I use?

Assets Plus is backwards compatible meaning any version can work. However, the dependent addon will throw an error if the correct version is not enabled. Typically to can check the changelog of the dependent addon to get the required version. If the addon doesn't have a changelog or doesn't state which version the latest one should work fine.

## Why a separate resource pack?

My last few add-ons use vanilla Minecraft assets, but the default texture id isn't the best, for example, It is impossible to use the White Concrete texture because it is inside an array of textures and thus not able to use the texture in a data-driven block. So making this a separate pack means less copy-pasting of the same block textures.

## How do I get this to work with my Add-On?

You can find information on how to add this library to yours via the [Documentation Page](https://docs.lpsmods.dev/assets-plus/)

## What IDs are supported?

You can find a list of all texture IDs on the [Documentation Page](https://docs.lpsmods.dev/assets-plus/).

## Where are the texture files inside the resource pack?

The resource pack reads Minecraft's built-in textures so there is no need to add all the vanilla textures, however, this does add both debug textures from Java Edition.

## Can I make my Add-On use this library?

Yes! Feel free to use this library for your own use. The only thing I ask is that you don't post this library to the public. However, you can include the mcpack inside the .mcaddon file (Along with your own packs) and post that if you want, But that may cause issues with other addons and will not always be up-to-date.

<!--@include: @/common/mod-faq.md -->
