// pages/TermsAndConditions.tsx
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import navlogo from "@/images/newshrirajlogo.jpeg";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
          <a href="/" className="flex items-center gap-2">
            <img 
              src={navlogo} 
              alt="Shriraj Property Logo" 
              className="h-14 w-auto"
            />
          </a>
          <Button variant="outline" size="sm" asChild>
            <a href="/#home">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </a>
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-24 pb-16 max-w-4xl">
        <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Terms and Conditions
          </h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-muted-foreground mb-6">
              Welcome to SHRIRAJ PROPERTY SOLUTIONS PVT. LTD.!
            </p>

            <p className="text-muted-foreground mb-6">
              These terms and conditions outline the rules and regulations for the use of SHRIRAJ PROPERTY SOLUTIONS PVT. LTD. Website.
            </p>

            <p className="text-muted-foreground mb-8">
              By accessing this website, we assume you accept these terms and conditions. Do not continue to use SHRIRAJ PROPERTY SOLUTIONS PVT. LTD. if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
              Cookies:
            </h2>
            <p className="text-muted-foreground mb-6">
              The website uses cookies to help personalize your online experience. By accessing SHRIRAJ PROPERTY SOLUTIONS PVT. LTD., you agreed to use the required cookies.
            </p>

            <p className="text-muted-foreground mb-6">
              A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you and can only be read by a web server in the domain that issued the cookie to you.
            </p>

            <p className="text-muted-foreground mb-6">
              We may use cookies to collect, store, and track information for statistical or marketing purposes to operate our website. You have the ability to accept or decline optional Cookies. There are some required Cookies that are necessary for the operation of our website. These cookies do not require your consent as they always work. Please keep in mind that by accepting required Cookies, you also accept third-party Cookies, which might be used via third-party provided services if you use such services on our website, for example, a video display window provided by third parties and integrated into our website.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
              License:
            </h2>
            <p className="text-muted-foreground mb-6">
              Unless otherwise stated, SHRIRAJ PROPERTY SOLUTIONS PVT. LTD. and/or its licensors own the intellectual property rights for all material on SHRIRAJ PROPERTY SOLUTIONS PVT. LTD.. All intellectual property rights are reserved. You may access this from SHRIRAJ PROPERTY SOLUTIONS PVT. LTD. for your own personal use subjected to restrictions set in these terms and conditions.
            </p>

            <p className="text-muted-foreground mb-6">You must not:</p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Copy or republish material from SHRIRAJ PROPERTY SOLUTIONS PVT. LTD.</li>
              <li>Sell, rent, or sub-license material from SHRIRAJ PROPERTY SOLUTIONS PVT. LTD.</li>
              <li>Reproduce, duplicate or copy material from SHRIRAJ PROPERTY SOLUTIONS PVT. LTD.</li>
              <li>Redistribute content from SHRIRAJ PROPERTY SOLUTIONS PVT. LTD.</li>
            </ul>

            <p className="text-muted-foreground mb-6">
              This Agreement shall begin on the date hereof.
            </p>

            <p className="text-muted-foreground mb-6">
              Parts of this website offer users an opportunity to post and exchange opinions and information in certain areas of the website. SHRIRAJ PROPERTY SOLUTIONS PVT. LTD. does not filter, edit, publish or review Comments before their presence on the website. Comments do not reflect the views and opinions of SHRIRAJ PROPERTY SOLUTIONS PVT. LTD., its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions. To the extent permitted by applicable laws, SHRIRAJ PROPERTY SOLUTIONS PVT. LTD. shall not be liable for the Comments or any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
            </p>

            <p className="text-muted-foreground mb-6">
              SHRIRAJ PROPERTY SOLUTIONS PVT. LTD. reserves the right to monitor all Comments and remove any Comments that can be considered inappropriate, offensive, or causes breach of these Terms and Conditions.
            </p>

            <p className="text-muted-foreground mb-6">You warrant and represent that:</p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
              <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent, or trademark of any third party;</li>
              <li>The Comments do not contain any defamatory, libelous, offensive, indecent, or otherwise unlawful material, which is an invasion of privacy.</li>
              <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
            </ul>

            <p className="text-muted-foreground mb-6">
              You hereby grant SHRIRAJ PROPERTY SOLUTIONS PVT. LTD. a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats, or media.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
              Hyperlinking to our Content:
            </h2>
            <p className="text-muted-foreground mb-6">
              The following organizations may link to our Website without prior written approval:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Government agencies;</li>
              <li>Search engines;</li>
              <li>News organizations;</li>
              <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
              <li>System-wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
            </ul>

            <p className="text-muted-foreground mb-6">
              These organizations may link to our home page, to publications, or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
              Content Liability:
            </h2>
            <p className="text-muted-foreground mb-6">
              We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are raised on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
              Reservation of Rights:
            </h2>
            <p className="text-muted-foreground mb-6">
              We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
              Removal of links from our website:
            </h2>
            <p className="text-muted-foreground mb-6">
              If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links, but we are not obligated to or so or to respond to you directly.
            </p>

            <p className="text-muted-foreground mb-6">
              We do not ensure that the information on this website is correct. We do not warrant its completeness or accuracy, nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
              Disclaimer:
            </h2>
            <p className="text-muted-foreground mb-6">
              To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Limit or exclude our or your liability for death or personal injury;</li>
              <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
              <li>Limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
              <li>Exclude any of our or your liabilities that may not be excluded under applicable law.</li>
            </ul>

            <p className="text-muted-foreground mb-6">
              The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.
            </p>

            <p className="text-muted-foreground">
              As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;