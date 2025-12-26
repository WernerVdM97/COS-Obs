# Curse of Strahd

## DnD5e

Preparation:

When cloning this repo, remember to garb Quartz if you plan on hosting locally:

```bash
git clone --recurse-submodules https://github.com/WernerVdM97/COS-Obs.git

cd COS-Obs/quartz
ln -s ../vault content
npm install
npx quartz build --serve
```

To reset quarts folders

```bash
cd quartz/ && rm -rf .quartz .cache public node_modules content
ln -s ../vault content
```

In Obsidian:
1. hide `Hidden/` for spoilers and `quarts/` for noise by going to
	1. settings,
	2. files and links,
	3.  excluded files -> `manage`
2.  load `storymode` workspace layout,
3. Ensure you are on [[Characters and Items.canvas|Characters and Items]] and selected [[The party]]
4. Alternatively, see [Log](https://wernervdm97.github.io/COS-Obs/Log).