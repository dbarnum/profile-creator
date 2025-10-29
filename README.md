profile-creator
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/profile-creator.svg)](https://npmjs.org/package/profile-creator)
[![Downloads/week](https://img.shields.io/npm/dw/profile-creator.svg)](https://npmjs.org/package/profile-creator)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g profile-creator
$ profile-creator COMMAND
running command...
$ profile-creator (--version)
profile-creator/0.0.0 linux-x64 node-v22.19.0
$ profile-creator --help [COMMAND]
USAGE
  $ profile-creator COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`profile-creator hello PERSON`](#profile-creator-hello-person)
* [`profile-creator hello world`](#profile-creator-hello-world)
* [`profile-creator help [COMMAND]`](#profile-creator-help-command)
* [`profile-creator plugins`](#profile-creator-plugins)
* [`profile-creator plugins add PLUGIN`](#profile-creator-plugins-add-plugin)
* [`profile-creator plugins:inspect PLUGIN...`](#profile-creator-pluginsinspect-plugin)
* [`profile-creator plugins install PLUGIN`](#profile-creator-plugins-install-plugin)
* [`profile-creator plugins link PATH`](#profile-creator-plugins-link-path)
* [`profile-creator plugins remove [PLUGIN]`](#profile-creator-plugins-remove-plugin)
* [`profile-creator plugins reset`](#profile-creator-plugins-reset)
* [`profile-creator plugins uninstall [PLUGIN]`](#profile-creator-plugins-uninstall-plugin)
* [`profile-creator plugins unlink [PLUGIN]`](#profile-creator-plugins-unlink-plugin)
* [`profile-creator plugins update`](#profile-creator-plugins-update)

## `profile-creator hello PERSON`

Say hello

```
USAGE
  $ profile-creator hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ profile-creator hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/dbarnum/profile-creator/blob/v0.0.0/src/commands/hello/index.ts)_

## `profile-creator hello world`

Say hello world

```
USAGE
  $ profile-creator hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ profile-creator hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/dbarnum/profile-creator/blob/v0.0.0/src/commands/hello/world.ts)_

## `profile-creator help [COMMAND]`

Display help for profile-creator.

```
USAGE
  $ profile-creator help [COMMAND...] [-n]

ARGUMENTS
  [COMMAND...]  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for profile-creator.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.34/src/commands/help.ts)_

## `profile-creator plugins`

List installed plugins.

```
USAGE
  $ profile-creator plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ profile-creator plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.51/src/commands/plugins/index.ts)_

## `profile-creator plugins add PLUGIN`

Installs a plugin into profile-creator.

```
USAGE
  $ profile-creator plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into profile-creator.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the PROFILE_CREATOR_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the PROFILE_CREATOR_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ profile-creator plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ profile-creator plugins add myplugin

  Install a plugin from a github url.

    $ profile-creator plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ profile-creator plugins add someuser/someplugin
```

## `profile-creator plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ profile-creator plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ profile-creator plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.51/src/commands/plugins/inspect.ts)_

## `profile-creator plugins install PLUGIN`

Installs a plugin into profile-creator.

```
USAGE
  $ profile-creator plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into profile-creator.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the PROFILE_CREATOR_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the PROFILE_CREATOR_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ profile-creator plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ profile-creator plugins install myplugin

  Install a plugin from a github url.

    $ profile-creator plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ profile-creator plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.51/src/commands/plugins/install.ts)_

## `profile-creator plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ profile-creator plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ profile-creator plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.51/src/commands/plugins/link.ts)_

## `profile-creator plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ profile-creator plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ profile-creator plugins unlink
  $ profile-creator plugins remove

EXAMPLES
  $ profile-creator plugins remove myplugin
```

## `profile-creator plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ profile-creator plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.51/src/commands/plugins/reset.ts)_

## `profile-creator plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ profile-creator plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ profile-creator plugins unlink
  $ profile-creator plugins remove

EXAMPLES
  $ profile-creator plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.51/src/commands/plugins/uninstall.ts)_

## `profile-creator plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ profile-creator plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ profile-creator plugins unlink
  $ profile-creator plugins remove

EXAMPLES
  $ profile-creator plugins unlink myplugin
```

## `profile-creator plugins update`

Update installed plugins.

```
USAGE
  $ profile-creator plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.51/src/commands/plugins/update.ts)_
<!-- commandsstop -->
