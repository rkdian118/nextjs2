import PropTypes from 'prop-types';
import SocialProfile from 'views/apps/user/social-profile';

// ==============================|| PAGE ||============================== //

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page({ params }) {
  const { tabs } = params;

  return <SocialProfile tab={tabs} />;
}

Page.propTypes = {
  params: PropTypes.object,
  tabs: PropTypes.string
};

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const response = ['posts', 'follower', 'friends', 'gallery', 'friend-request'];

  return response.map((tab) => ({
    tab
  }));
}
