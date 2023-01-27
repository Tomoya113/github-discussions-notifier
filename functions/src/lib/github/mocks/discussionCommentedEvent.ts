import { DiscussionCommentCreatedEvent } from '@octokit/webhooks-types'

export const discussionCommentCreatedEventMock: DiscussionCommentCreatedEvent =
  {
    action: 'created',
    comment: {
      id: 550062,
      node_id: 'MDE3OkRpc2N1c3Npb25Db21tZW50NTUwMDYy',
      html_url:
        'https://github.com/Codertocat/Hello-World/discussions/4#discussioncomment-550062',
      parent_id: null,
      child_comment_count: 0,
      repository_url: 'Codertocat/Hello-World',
      discussion_id: 3299614,
      author_association: 'OWNER',
      user: {
        login: 'Codertocat',
        id: 21031067,
        node_id: 'MDQ6VXNlcjIxMDMxMDY3',
        avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Codertocat',
        html_url: 'https://github.com/Codertocat',
        followers_url: 'https://api.github.com/users/Codertocat/followers',
        following_url:
          'https://api.github.com/users/Codertocat/following{/other_user}',
        gists_url: 'https://api.github.com/users/Codertocat/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Codertocat/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/Codertocat/subscriptions',
        organizations_url: 'https://api.github.com/users/Codertocat/orgs',
        repos_url: 'https://api.github.com/users/Codertocat/repos',
        events_url: 'https://api.github.com/users/Codertocat/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Codertocat/received_events',
        type: 'User',
        site_admin: false,
      },
      created_at: '2021-03-30T20:21:30Z',
      updated_at: '2021-03-30T20:21:30Z',
      body: 'ANSWER',
      reactions: {
        url: 'https://api.github.com/repos/Codertocat/Hello-World/discussions/comments/21031067/reactions',
        total_count: 0,
        '+1': 0,
        '-1': 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
    },
    discussion: {
      repository_url: 'https://api.github.com/repos/Codertocat/Hello-World',
      category: {
        id: 32809314,
        repository_id: 186853002,
        emoji: ':speech_balloon:',
        name: 'General',
        description: 'Chat about anything and everything here',
        created_at: '2021-03-30T16:09:00.000-04:00',
        updated_at: '2021-03-30T16:09:00.000-04:00',
        slug: 'general',
        is_answerable: false,
      },
      answer_html_url: null,
      answer_chosen_at: null,
      answer_chosen_by: null,
      html_url: 'https://github.com/Codertocat/Hello-World/discussions/4',
      id: 3299614,
      node_id: 'MDEwOkRpc2N1c3Npb24zMjk5NjE0',
      number: 4,
      title: 'TEST edit',
      user: {
        login: 'Codertocat',
        id: 21031067,
        node_id: 'MDQ6VXNlcjIxMDMxMDY3',
        avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Codertocat',
        html_url: 'https://github.com/Codertocat',
        followers_url: 'https://api.github.com/users/Codertocat/followers',
        following_url:
          'https://api.github.com/users/Codertocat/following{/other_user}',
        gists_url: 'https://api.github.com/users/Codertocat/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Codertocat/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/Codertocat/subscriptions',
        organizations_url: 'https://api.github.com/users/Codertocat/orgs',
        repos_url: 'https://api.github.com/users/Codertocat/repos',
        events_url: 'https://api.github.com/users/Codertocat/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Codertocat/received_events',
        type: 'User',
        site_admin: false,
      },
      state: 'open',
      locked: false,
      comments: 0,
      created_at: '2021-03-30T20:09:52Z',
      updated_at: '2021-03-30T20:26:24Z',
      author_association: 'OWNER',
      active_lock_reason: null,
      body: 'TEST edit',
    },
    repository: {
      id: 186853002,
      node_id: 'MDEwOlJlcG9zaXRvcnkxODY4NTMwMDI=',
      name: 'Hello-World',
      full_name: 'Codertocat/Hello-World',
      private: false,
      owner: {
        login: 'Codertocat',
        id: 21031067,
        node_id: 'MDQ6VXNlcjIxMDMxMDY3',
        avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Codertocat',
        html_url: 'https://github.com/Codertocat',
        followers_url: 'https://api.github.com/users/Codertocat/followers',
        following_url:
          'https://api.github.com/users/Codertocat/following{/other_user}',
        gists_url: 'https://api.github.com/users/Codertocat/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Codertocat/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/Codertocat/subscriptions',
        organizations_url: 'https://api.github.com/users/Codertocat/orgs',
        repos_url: 'https://api.github.com/users/Codertocat/repos',
        events_url: 'https://api.github.com/users/Codertocat/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Codertocat/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Codertocat/Hello-World',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/Codertocat/Hello-World',
      forks_url: 'https://api.github.com/repos/Codertocat/Hello-World/forks',
      keys_url:
        'https://api.github.com/repos/Codertocat/Hello-World/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Codertocat/Hello-World/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/Codertocat/Hello-World/teams',
      hooks_url: 'https://api.github.com/repos/Codertocat/Hello-World/hooks',
      issue_events_url:
        'https://api.github.com/repos/Codertocat/Hello-World/issues/events{/number}',
      events_url: 'https://api.github.com/repos/Codertocat/Hello-World/events',
      assignees_url:
        'https://api.github.com/repos/Codertocat/Hello-World/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Codertocat/Hello-World/branches{/branch}',
      tags_url: 'https://api.github.com/repos/Codertocat/Hello-World/tags',
      blobs_url:
        'https://api.github.com/repos/Codertocat/Hello-World/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/Codertocat/Hello-World/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/Codertocat/Hello-World/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/Codertocat/Hello-World/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/Codertocat/Hello-World/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/Codertocat/Hello-World/languages',
      stargazers_url:
        'https://api.github.com/repos/Codertocat/Hello-World/stargazers',
      contributors_url:
        'https://api.github.com/repos/Codertocat/Hello-World/contributors',
      subscribers_url:
        'https://api.github.com/repos/Codertocat/Hello-World/subscribers',
      subscription_url:
        'https://api.github.com/repos/Codertocat/Hello-World/subscription',
      commits_url:
        'https://api.github.com/repos/Codertocat/Hello-World/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Codertocat/Hello-World/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Codertocat/Hello-World/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Codertocat/Hello-World/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Codertocat/Hello-World/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Codertocat/Hello-World/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/Codertocat/Hello-World/merges',
      archive_url:
        'https://api.github.com/repos/Codertocat/Hello-World/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/Codertocat/Hello-World/downloads',
      issues_url:
        'https://api.github.com/repos/Codertocat/Hello-World/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/Codertocat/Hello-World/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Codertocat/Hello-World/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Codertocat/Hello-World/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/Codertocat/Hello-World/labels{/name}',
      releases_url:
        'https://api.github.com/repos/Codertocat/Hello-World/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/Codertocat/Hello-World/deployments',
      created_at: '2019-05-15T15:19:25Z',
      updated_at: '2019-05-15T15:20:41Z',
      pushed_at: '2019-05-15T15:20:52Z',
      git_url: 'git://github.com/Codertocat/Hello-World.git',
      ssh_url: 'git@github.com:Codertocat/Hello-World.git',
      clone_url: 'https://github.com/Codertocat/Hello-World.git',
      svn_url: 'https://github.com/Codertocat/Hello-World',
      homepage: null,
      size: 0,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'Ruby',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: true,
      forks_count: 1,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 2,
      license: null,
      forks: 1,
      open_issues: 2,
      watchers: 0,
      default_branch: 'master',
      is_template: false,
      topics: [],
      visibility: 'public',
      web_commit_signoff_required: false,
    },
    sender: {
      login: 'Codertocat',
      id: 21031067,
      node_id: 'MDQ6VXNlcjIxMDMxMDY3',
      avatar_url: 'https://avatars1.githubusercontent.com/u/21031067?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Codertocat',
      html_url: 'https://github.com/Codertocat',
      followers_url: 'https://api.github.com/users/Codertocat/followers',
      following_url:
        'https://api.github.com/users/Codertocat/following{/other_user}',
      gists_url: 'https://api.github.com/users/Codertocat/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/Codertocat/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/Codertocat/subscriptions',
      organizations_url: 'https://api.github.com/users/Codertocat/orgs',
      repos_url: 'https://api.github.com/users/Codertocat/repos',
      events_url: 'https://api.github.com/users/Codertocat/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/Codertocat/received_events',
      type: 'User',
      site_admin: false,
    },
    installation: {
      id: 1,
      node_id: 'MDIzOkludGVncmF0aW9uSW5zdGFsbGF0aW9uMQ==',
    },
  }
