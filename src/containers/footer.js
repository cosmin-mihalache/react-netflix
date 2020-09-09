import React from 'react';
import { Footer } from '../components';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Call 0800-672-120</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="https://help.netflix.com/en/node/412">FAQ</Footer.Link>
          <Footer.Link href="https://www.netflixinvestor.com/ir-overview/profile/default.aspx">Investor Relations</Footer.Link>
          <Footer.Link href="https://help.netflix.com/legal/privacy">Privacy</Footer.Link>
          <Footer.Link href="https://fast.com/">Speed Test</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="https://help.netflix.com/en/">Help Center</Footer.Link>
          <Footer.Link href="https://jobs.netflix.com/">Jobs</Footer.Link>
          <Footer.Link href="#">Cookie Preferences</Footer.Link>
          <Footer.Link href="https://www.netflix.com/ro-en/watch-free">Watch for Free</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Account</Footer.Link>
          <Footer.Link href="https://devices.netflix.com/en/">Ways to Watch</Footer.Link>
          <Footer.Link href="https://help.netflix.com/en/node/2101">Corporate Information</Footer.Link>
          <Footer.Link href="https://help.netflix.com/en/legal/notices">Legal Notices</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="https://media.netflix.com/en/">Media Center</Footer.Link>
          <Footer.Link href="https://help.netflix.com/en/legal/termsofuse">Terms of Use</Footer.Link>
          <Footer.Link href="https://help.netflix.com/en/contactus">Contact Us</Footer.Link>
          <Footer.Link href="https://www.netflix.com/ro-en/browse/genre/839338">Netflix Originals</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Netflix Romania</Footer.Text>
    </Footer>
  );
}
