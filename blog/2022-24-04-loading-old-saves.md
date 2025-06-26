---
title: Treasure Island MC - Data Recovery Guide
description: Guide for recovering your vaults, homes, and claims from Treasure Island MC
layout: post
tags:
   - minecraft
   - data-recovery
   - server-guide
   - vaults
   - homes
   - claims
   - uuid
   - server-setup
   - plugins
   - world-downloads
   - treasure-island
date: 2022-04-04
authors: [sarhatabaot]
---

# Treasure Island MC Data Recovery Guide

Vault data & homes/claim data is available on [Treasure Island MC GitHub](https://github.com/TreasureIslandMC/treasureislandmc.github.io).

## Table of Contents
- [Vaults](#vaults)
- [Homes](#homes)
- [Claims](#claims)
- [Finding Your UUID](#whats-my-uuid)
- [Prerequisites](#before-starting)
- [Server Setup](#running-a-1171-server)
- [Plugin Installation](#installing-plugins)
- [World Downloads](#world-saves)

## Vaults

Your vaults data is located in `tools/server/vaults`. 

1. Use `CTRL+F` with your UUID to download the correct file.
2. To read this file you can either:
   - Run PlayerVaultsX on a Spigot-based server
   - Use [Base64 Decoder](https://www.base64decode.org/) to view contents

:::note PlayerVaultsX Information

PlayerVaultsX is a paid plugin. Alternatives:
- Use the base64 decoder
- Compile it yourself via [PlayerVaults GitHub](https://github.com/drtshock/PlayerVaults)

:::

## Homes

### Fantasy Homes
[https://raw.githubusercontent.com/TreasureIslandMC/treasureislandmc.github.io/master/tools/fantasy/worlds/homes.json](https://raw.githubusercontent.com/TreasureIslandMC/treasureislandmc.github.io/master/tools/fantasy/worlds/homes.json)

### Survival Homes
[https://raw.githubusercontent.com/TreasureIslandMC/treasureislandmc.github.io/master/tools/survival/worlds/homes.json](https://raw.githubusercontent.com/TreasureIslandMC/treasureislandmc.github.io/master/tools/survival/worlds/homes.json)

Use `CTRL+F` to find your homes list in either file.

## Claims

### Fantasy Claims
1. Go to [Fantasy Worlds](https://github.com/TreasureIslandMC/treasureislandmc.github.io/tree/master/tools/fantasy/worlds)
2. Choose the world
3. Search for your UUID using `CTRL+F`

### Survival Claims
[https://github.com/TreasureIslandMC/treasureislandmc.github.io/blob/master/tools/survival/worlds/claims.json](https://github.com/TreasureIslandMC/treasureislandmc.github.io/blob/master/tools/survival/worlds/claims.json)

Use `CTRL+F` to find your claims.

## What's my UUID?

You can use:
- [NameMC](https://namemc.com/)
- [MineTools UUID Lookup](https://api.minetools.eu/uuid/)

## Before Starting

Make sure you have Java installed. If you want to compile PlayerVaultX, install a JDK as well.

- [Java 8](https://adoptium.net/temurin/releases?version=8)
- [Java 17](https://adoptium.net/temurin/releases?version=17)

## Running a 1.17.1 Server

We ran the latest version of Paper for 1.17.1 (a modified version called Purpur). For loading saves, this doesn't matter.

1. Download server: [Paper 1.17.1 Build 411](https://api.papermc.io/v2/projects/paper/versions/1.17.1/builds/411/downloads/paper-1.17.1-411.jar)
2. Place in an empty folder
3. Create `start.bat` file with these contents:

```bat
@echo off
java -Xms4G -Xmx4G -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40^ -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true -jar paper-1.17.1-411.jar -nogui 
pause
```

:::note RAM Allocation

`-Xms4G -Xmx4G` sets RAM allocation. Adjust to `2G` if needed.

:::

4. Run the server, then edit `eula.txt` to set `eula=true`.

## Restarting Your Server

1. Type `stop` in console
2. Run `start.bat` again

## Installing Plugins

### Multiverse Core
For world switching: [Download Multiverse](https://dev.bukkit.org/projects/multiverse-core)

1. Place in `plugins` folder
2. Restart server

### EssentialsX
For teleportation and home management: [Download EssentialsX](https://essentialsx.net/downloads.html) (Core version is sufficient)

1. Place in `plugins` folder
2. Restart server

### PlayerVaultsX
For accessing your vaults:

1. Compile from source (see below)
2. Place in `plugins` folder
3. Restart server

## Compiling PlayerVaultsX

Source: [PlayerVaults GitHub](https://github.com/drtshock/PlayerVaults)

1. Install [Maven](https://maven.apache.org/download.cgi)
2. Run:
   ```sh
   mvn clean package
   ```

# World Saves

## Survival Worlds
- [Castaway](https://e.pcloud.link/publink/show?code=XZ8RiMZPnPF6Ug0xqua67oN3nMPWfloijK7)
- [Scabb](https://e.pcloud.link/publink/show?code=XZSmrMZUTO0Fi9jUvkz9l6erjYbKVleTgHy)
- [Spittle](https://e.pcloud.link/publink/show?code=XZ0ciMZjLBdc8mfmAjruVkbCnmagjWv3APV)
- [Scurvy](https://e.pcloud.link/publink/show?code=XZlhcMZ1BIjuz9434z1Mvw72DFgpR1avDuk)
- [TBR (Privatet)](https://e.pcloud.link/publink/show?code=XZ7LiMZP5qmgPvOdtmcAmei2BlOq5QlukVX)
- [TBR (Privatef)](https://e.pcloud.link/publink/show?code=XZeRiMZ6W0Ukzg0v5RH827KUOzWa0Qe5mpk)
- [TBR (Privatez)](https://e.pcloud.link/publink/show?code=XZJLiMZABnvxtkJWOfteSVOg89pc5fF3xo7)
- [Tortuga](https://e.pcloud.link/publink/show?code=XZ5loMZiY3yxUDhcfjuJCCzjo1ukmuWs8dk)
- [Pinch](https://e.pcloud.link/publink/show?code=XZFloMZ0TYvve6iWFFotOnARaeiuYCxFDt7)
- [Monkey](https://e.pcloud.link/publink/show?code=XZHloMZQ1vxzpu86Oh4BhOegdmG97ESGWYy)
- [Jerkbait](https://e.pcloud.link/publink/show?code=XZzloMZkmiGuNawezHwSNhCIRvEFbVf7GJV)

## Fantasy Worlds
- [Treasure](https://e.pcloud.link/publink/show?code=XZpjkTZIr24PSSHKu5cpXX2oqSbYLL1n2BV)
- [Skull](https://e.pcloud.link/publink/show?code=XZAzyTZJekUIS5EFeFJguNJH2qDHVznGoU7)
- [Resort](https://e.pcloud.link/publink/show?code=XZRjkTZ6Qp4nNhNYSufkoRI1daUvQGiVbhk)
- [Paradise](https://e.pcloud.link/publink/show?code=XZ4jkTZ29wnuybLGuh9l3VRrNIRluw26hV0)
- [Plots](https://e.pcloud.link/publink/show?code=XZQjkTZKjSJJIWIzzJMocd8bS1HkzHWiqfX)
- [Seashore](https://e.pcloud.link/publink/show?code=XZSjkTZotPVEiIeezyIHLc1FWeJnmmBtxBV)
- [Tortuga](https://e.pcloud.link/publink/show?code=XZVjkTZxV51PGdjtISwbdBfk4x6s5fjclSk)
- [Scurvy](https://e.pcloud.link/publink/show?code=XZ5jkTZzkkAqPQ5aTprEx971vX705giT0tX)

## Lobby Worlds
- [Lobby 2019](https://e.pcloud.link/publink/show?code=XZjQiMZq3PNFRGH6V01C4W3AqMOEJoL8gVV)
- [Lobby 2022](https://e.pcloud.link/publink/show?code=XZBQiMZRMQNtVYdwUyoLVExM0u125Q8ElPk)

## Skyblock/Skygrid
- [Skyblock](https://e.pcloud.link/publink/show?code=XZfjkTZwphuisfXoCViBi7Kattfu5Kgx6K7)
- [Skygrid](https://e.pcloud.link/publink/show?code=XZDjkTZnzMGHgpSciXy9fYycnzmBysGUzOk)
- [Skygrid (Old)](https://e.pcloud.link/publink/show?code=XZejkTZjR3lS9TIWX412C5jg3rBD0Rc8jF7)

## [Vanilla-ish](https://e.pcloud.link/publink/show?code=XZjy5TZMwTF5PsHQ1J5ux3GbRxeuXkjtT97)