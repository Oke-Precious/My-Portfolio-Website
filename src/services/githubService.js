/**
 * GitHub API Service for Oke Precious Portfolio
 * Fetches real public repositories and profile data from GitHub.
 * Implements client-side caching to respect GitHub's 60 req/hr unauthenticated rate limit.
 * Provides resilient fallbacks if GitHub API is offline or rate-limited.
 */

const GITHUB_USERNAME = 'Oke-Precious';
const CACHE_KEY_REPOS = 'oke_github_repos_v1';
const CACHE_KEY_PROFILE = 'oke_github_profile_v1';
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

// Curated list of featured repository names for portfolio focus
export const FEATURED_REPO_NAMES = [
  'Gavel-Case-Tracker',
  'Special-Bank-Web-App',
  'Projexa',
  'SPECIAL-BEAN-SCENE',
  'Special-Hotel',
  'specialweather.netlify.app'
];

/**
 * Fetch GitHub User Profile with caching
 */
export async function fetchGitHubProfile() {
  // Check localStorage cache
  try {
    const cached = localStorage.getItem(CACHE_KEY_PROFILE);
    if (cached) {
      const { timestamp, data } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_TTL_MS && data) {
        return { success: true, data, fromCache: true };
      }
    }
  } catch (err) {
    // Ignore cache read errors
  }

  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });

    if (!res.ok) {
      throw new Error(`GitHub Profile API status: ${res.status}`);
    }

    const data = await res.json();
    try {
      localStorage.setItem(
        CACHE_KEY_PROFILE,
        JSON.stringify({ timestamp: Date.now(), data })
      );
    } catch (err) {
      // Storage full or private mode
    }

    return { success: true, data, fromCache: false };
  } catch (err) {
    return {
      success: false,
      error: err.message,
      data: {
        login: GITHUB_USERNAME,
        html_url: `https://github.com/${GITHUB_USERNAME}`,
        name: 'Oke Precious Abioye',
        bio: 'Full-Stack Web Developer | React, Node.js, Express, MongoDB',
        public_repos: 12,
        followers: 10,
        following: 15,
      },
    };
  }
}

/**
 * Fetch Public Repositories with caching
 */
export async function fetchGitHubRepos() {
  // Check localStorage cache
  try {
    const cached = localStorage.getItem(CACHE_KEY_REPOS);
    if (cached) {
      const { timestamp, data } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_TTL_MS && Array.isArray(data)) {
        return { success: true, data, fromCache: true };
      }
    }
  } catch (err) {
    // Ignore cache read errors
  }

  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );

    if (!res.ok) {
      throw new Error(`GitHub Repos API status: ${res.status}`);
    }

    const repos = await res.json();
    if (Array.isArray(repos)) {
      try {
        localStorage.setItem(
          CACHE_KEY_REPOS,
          JSON.stringify({ timestamp: Date.now(), data: repos })
        );
      } catch (err) {
        // Storage full or private mode
      }
      return { success: true, data: repos, fromCache: false };
    }
    throw new Error('Unexpected response format');
  } catch (err) {
    return {
      success: false,
      error: err.message,
      data: [],
    };
  }
}
