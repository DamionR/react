import React from 'react';
import { Suspense } from 'react';
import { Await } from '@remix-run/react';
import Header from './components/Header'; // Assuming your Header component path
import NavigationBar from './components/NavigationBar'; // Assuming your NavigationBar component path
import Footer from './components/Footer'; // Assuming your Footer component path
import { Outlet } from 'remix'; // For rendering page content

import Introduction from './components/Home/Introduction'; // Assuming your Introduction component path
import SkillHighlights from './components/Home/SkillHighlights'; // Assuming your SkillHighlights component path
import RecentProjectsPreview from './components/Home/RecentProjectsPreview'; // Assuming your RecentProjectsPreview component path
import ProfessionalSummary from './components/About/ProfessionalSummary'; // Assuming your ProfessionalSummary component path
import TechnicalProficiency from './components/About/TechnicalProficiency'; // Assuming your TechnicalProficiency component path
import PersonalityInsights from './components/About/PersonalityInsights'; // Assuming your PersonalityInsights component path
import ProjectGallery from './components/Portfolio/ProjectGallery'; // Assuming your ProjectGallery component path
import ProjectCard from './components/Portfolio/ProjectCard'; // Assuming your ProjectCard component path
import ResumeDownload from './components/Resume/ResumeDownload'; // Assuming your ResumeDownload component path
import CareerTimeline from './components/Resume/CareerTimeline'; // Assuming your CareerTimeline component path
import BlogListing from './components/Blog/BlogListing'; // Assuming your BlogListing component path (if applicable)
import ContactForm from './components/Contact/ContactForm'; // Assuming your ContactForm component path
import SocialLinks from './components/Contact/SocialLinks'; // Assuming your SocialLinks component path

export function Layout({ children, page, ...props }) { // Use props object for flexibility
  return (
    <>
      <Header {...props} />
      <NavigationBar />
      <main className="container"> {/* Wrap main content in a container */}

        {/* Homepage Content */}
        {page === 'home' && (
          <>
            <Introduction />
            <SkillHighlights />
            <RecentProjectsPreview />
          </>
        )}

        {/* About Me Content */}
        {page === 'about' && (
          <>
            <ProfessionalSummary />
            <TechnicalProficiency />
            <PersonalityInsights />
          </>
        )}

        {/* Portfolio Content */}
        {page === 'portfolio' && (
          <ProjectGallery>
            <ProjectCard project={{ title: 'Project 1', description: 'Brief description', link: 'https://...' }} />
            <ProjectCard project={{ title: 'Project 2', description: 'Brief description', link: 'https://...' }} />
            {/* ... Add more ProjectCard components */}
          </ProjectGallery>
        )}

        {/* Resume Content */}
        {page === 'resume' && (
          <>
            <ResumeDownload />
            <CareerTimeline />
          </>
        )}

        {/* Blog Content (if applicable) */}
        {page === 'blog' && (
          <BlogListing />
        )}

        {/* Contact Content */}
        {page === 'contact' && (
          <>
            <ContactForm />
            <SocialLinks socialLinks={[{ icon: '...', url: '...' }, { icon: '...', url: '...' }]} />
          </>
        )}

        <Outlet /> {/* Render page-specific content here (optional) */}
      </main>
      <Footer {...props} />
    </>
  );
}
/**
 * @param {{cart: LayoutProps['cart']}}
 */
function CartAside({cart}) {
  return (
    <Aside id="cart-aside" heading="CART">
      <Suspense fallback={<p>Loading cart ...</p>}>
        <Await resolve={cart}>
          {(cart) => {
            return <CartMain cart={cart} layout="aside" />;
          }}
        </Await>
      </Suspense>
    </Aside>
  );
}

function SearchAside() {
  return (
    <Aside id="search-aside" heading="SEARCH">
      <div className="predictive-search">
        <br />
        <PredictiveSearchForm>
          {({fetchResults, inputRef}) => (
            <div>
              <input
                name="q"
                onChange={fetchResults}
                onFocus={fetchResults}
                placeholder="Search"
                ref={inputRef}
                type="search"
              />
              &nbsp;
              <button
                onClick={() => {
                  window.location.href = inputRef?.current?.value
                    ? `/search?q=${inputRef.current.value}`
                    : `/search`;
                }}
              >
                Search
              </button>
            </div>
          )}
        </PredictiveSearchForm>
        <PredictiveSearchResults />
      </div>
    </Aside>
  );
}

/**
 * @param {{
 *   menu: HeaderQuery['menu'];
 *   shop: HeaderQuery['shop'];
 * }}
 */
function MobileMenuAside({menu, shop}) {
  return (
    menu &&
    shop?.primaryDomain?.url && (
      <Aside id="mobile-menu-aside" heading="MENU">
        <HeaderMenu
          menu={menu}
          viewport="mobile"
          primaryDomainUrl={shop.primaryDomain.url}
        />
      </Aside>
    )
  );
}

/**
 * @typedef {{
 *   cart: Promise<CartApiQueryFragment | null>;
 *   children?: React.ReactNode;
 *   footer: Promise<FooterQuery>;
 *   header: HeaderQuery;
 *   isLoggedIn: Promise<boolean>;
 * }} LayoutProps
 */

/** @typedef {import('storefrontapi.generated').CartApiQueryFragment} CartApiQueryFragment */
/** @typedef {import('storefrontapi.generated').FooterQuery} FooterQuery */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */

/**
 * @param {{cart: LayoutProps['cart']}}
 */
function CartAside({cart}) {
  return (
    <Aside id="cart-aside" heading="CART">
      <Suspense fallback={<p>Loading cart ...</p>}>
        <Await resolve={cart}>
          {(cart) => {
            return <CartMain cart={cart} layout="aside" />;
          }}
        </Await>
      </Suspense>
    </Aside>
  );
}

function SearchAside() {
  return (
    <Aside id="search-aside" heading="SEARCH">
      <div className="predictive-search">
        <br />
        <PredictiveSearchForm>
          {({fetchResults, inputRef}) => (
            <div>
              <input
                name="q"
                onChange={fetchResults}
                onFocus={fetchResults}
                placeholder="Search"
                ref={inputRef}
                type="search"
              />
              &nbsp;
              <button
                onClick={() => {
                  window.location.href = inputRef?.current?.value
                    ? `/search?q=${inputRef.current.value}`
                    : `/search`;
                }}
              >
                Search
              </button>
            </div>
          )}
        </PredictiveSearchForm>
        <PredictiveSearchResults />
      </div>
    </Aside>
  );
}

/**
 * @param {{
 *   menu: HeaderQuery['menu'];
 *   shop: HeaderQuery['shop'];
 * }}
 */
function MobileMenuAside({menu, shop}) {
  return (
    menu &&
    shop?.primaryDomain?.url && (
      <Aside id="mobile-menu-aside" heading="MENU">
        <HeaderMenu
          menu={menu}
          viewport="mobile"
          primaryDomainUrl={shop.primaryDomain.url}
        />
      </Aside>
    )
  );
}

/**
 * @typedef {{
 *   cart: Promise<CartApiQueryFragment | null>;
 *   children?: React.ReactNode;
 *   footer: Promise<FooterQuery>;
 *   header: HeaderQuery;
 *   isLoggedIn: Promise<boolean>;
 * }} LayoutProps
 */

/** @typedef {import('storefrontapi.generated').CartApiQueryFragment} CartApiQueryFragment */
/** @typedef {import('storefrontapi.generated').FooterQuery} FooterQuery */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
