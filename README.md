# Security Privacy Trust (SPT) A.G.E. Website with Modular Design

## Directory Structure

- <b>css</b> (CSS files for the main SPTA.G.E. website.)

- <b>conferences</b> (<u>Archived</u> conference websites' folder.)

- <b>data</b> (Distributed DB/XML files of the website. Please update your information here with the respected XML file of different section.)

- <b>doc</b> (General files (e.g., Papers, Picutres, ..etc) that are related to the content of the main SPTA.G.E. website.)

- <b>img</b> (Image files for the main SPTA.G.E. website.)

- <b>js</b> (Javascript program files.)

- <b>projects</b> (<u>Archived</u> project websites' folder.)

- <b>symposiums</b> (<u>Archived</u> symposium websites' folder.)

- <b>workshops</b> (Workshop websites' folder.)

## 

## Data Entries

Data entries for important for modular SPT A.G.E. modular website. These data entries provide the data records for the DDB(Distributed Database.). Please read the following instruction carefully before editing these data entries.

### General rules for data entries:

#### Storage Location:

All website data entries are contained at: <b><u>data</u></b> directory.

#### Expression and Context:

- All records are structured in <b><u>XML</u></b> format.

- <b>HTML expressions are allowed.</b> However, <b><u>Special characters listed in HTML entities need to be escaped properly</u></b>.
  
  - Example:
    
    - ```textile
      What you want: <b>Emphasize this</b>
      ```
    
    - ```textile
      What you should do: &lt;b&gt;Emphasize this&lt;/b&gt;
      ```
  
  - Commonly used HTML entities:
    
    - ```textile
      < : <
      ```
    
    - ```textile
      > : >
      ```
    
    - ```textile
      " : "
      ```
    
    - ```textile
      & : &
      ```
    
    - ```textile
      ( : &#40;
      ```
    
    - ```textile
      ) : &#41;
      ```
    
    - For more information about HTML entities, take a look at this [table](https://www.freeformatter.com/html-entities.html)

- <b>Latest record should be on the top.</b> DDB does not have any capabilities on sorting.

#### About Data Entries

- <b>intro.xml</b> : The introductory information for the page tab: Home. (<b>Only 1 record allowed!</b> Adding more records will not take effect.)
  
  - <i>Data Structure:</i>
    
    - ```textile
      <intro>
      ```
  
  - **\<intro\>** : Attribute for storing the lab's introductory information. [Mandatory]
  
  - <i>Example</i>
    
    - ```textile
      <intro>
          <a href="https://example.com">Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </intro>
      ```

- <b>news.xml</b> : News information for the page tab: Home.
  
  - <i>Data Structure</i>
    
    - ```textile
      <newsBunch>
          |- <news>
                |- <date>
                |- <content>
      ```
  
  - **\<newsBunch\>** : The collection entity for \<news\>
    
    - **\<news\>** : The data entity of news
      
      - **\<date\>** : The date and time when the piece of news was published. It must follow the format: <b>dd mm, YYYY HH:MM:SS</b> [Mandatory]
      
      - **\<content\>** : Information you wish to display. [Mandatory]
  
  - <i>Example</i>
    
    - ```textile
      <newsBunch>
          <news>
              <date>31 March, 2024 12:34:56</date>
              <content>Lorem ipsum dolor sit amet</content>
          </news>
      </newsBunch>
      ```

- <b>people.xml</b> : The members' information for the tab: People.
  
  - <i>Data Structure</i>
    
    - ```textile
      <people>
         |- <faculties>
              |- <faculty>
                   |- <name>
                   |- <img>
                   |- <position>
                   |- <desc>
         |- <phds>
              |- <phd>
                   |- <name>
                   |- <url>
                   |- <duration>
                   |- <interest>
                   |- <project>
                   |- <projects> (When multiple projects were given)
                        |- <project>
                   |- <special>
                   |- <specials> (When multiple special proj. were given)
                        |- <special>
                   |- <addendum>
                   |- <addendums> (When multiple addendums were given)
                        |- <addendum>
         |- <postdocs>
              |- <postdoc>
                   |- (same as <phds>)
         |- <masters>
              |- <master>
                   |- (same as <phds>)
         |- <bachelors>
              |- <bachelor>
                   |- (same as <phds>)
         |- <awards>
              |- <award>
                   |- <name>
                   |- <url>
      ```
  
  - **\<people\>** : The collection bunch of \<faculties\>, \<phds\>, \<postdocs\>, \<masters\>, \<bachelors\>, and \<awards\>
    
    - **\<faculties\>** : The collection entity for \<faculty\>
      
      - **\<faculty\>** : The data entity of faculty
        
        - **\<name\>** : The name of the faculty [Mandatory]
        
        - **\<img\>** : The URL of the image for faculty. Relative path can be used. [Mandatory]
        
        - **\<position\>** : The position of the faculty. [Mandatory]
        
        - **\<desc\>** : The description of the faculty. [Mandatory]
    
    - **\<phds\>** : The collection entity for \<phd\>
      
      - **\<phd\>**: The data entity of Ph.D.
        
        - **\<name\>** : The name of the student. [Mandatory]
        
        - **\<url\>** : The URL to the student's personal site or profile. [Optional]
        
        - **\<duration\>** : The study duration of the student. [Mandatory]
        
        - **\<interest\>** : The research interest(s) of the student. [Optional]
        
        - **\<projects\>** : (<u>Use only If multiple projects were given to this student : </u> ) The collection entity for \<project\> [Optional]
          
          - **\<project\>** : The main research project of the student. [Optional]
        
        - **\<specials\>** : (<u>Use only if multiple special courses / projects were given to this students : </u>) The collection entity for \<special\> [Optional]
          
          - **\<special\>** : The special course of the student. [Optional]
        
        - **\<addendums\>** : (<u>Use only if multiple addendums were given to this students. : </u>) The collection entity for \<addendum\> [Optional]
          
          - **\<addendum\>** : The additional information of the student. [Optional]
    
    - **\<postdocs\>** : The collection entity for \<postdoc\>
      
      - **\<postdoc\>** : The data entity of PostDoc
        
        - (Same as PhD)
    
    - **\<masters\>** : The collection entity for \<master\>
      
      - **\<master\>** : The data entity of Master
        
        - (Same as PhD)
    
    - **\<bachelors\>** : The collection entity for \<bachelor\>
      
      - **\<bachelor\>** : The data entity of Bachelor
        
        - (Same as PhD)
    
    - **\<awards\>** : The collection entity for \<award\>
      
      - **\<award\>** : The data entity for award
        
        - **\<name\>** : The title of the award. [Mandatory]
        
        - **\<url\>** : The URL toward the resource of the award. [Optional]
  
  - <i>Example</i>
    
    - ```textile
      <people>
          <faculties>
              <faculty>
                  <name>John Doe</name>
                  <img>img/people/jd.jpg</url>
                  <position>Assistant Professor</position>
                  <desc>Lorem ipsum dolor sit amet</desc>
              </faculty>
          </faculties>
      
          <phds>
              <phd>
                  <name>Jane Doe</name>
                  <url>https://example.com</url>
                  <projects>
                      <project>Research Topic 1</project>
                      <project>Research Topic 2</project>
                  </projects>
              </phd>
          </phds>
      
          <masters>
              <master>
                  <name>Hank Doe</name>
                  <project>Graduation Project</project>
                  <specials>
                      <special>Special Course 1</special>
                      <special>Special Course 2</special>
                  </specials>
              </master>
          </masters>
      </people>
      ```

- <b>works.xml</b> : The work and resources information for the tab: Work and Resources.
  
  - <i>Data Structure</i>
    
    - ```textile
      <workBunch>
         |- <work>
              |- <title>
              |- <desc>
              |- <img>
              |- <button>
              |- <buttons> (When multiple buttons were assigned)
                   |- <button>
      ```
  
  - **\<workBunch\>** : The collection entity of \<work\>
    
    - **\<work\>** : The data entity of work and resources.
      
      - **\<title\>** : The title of the work. [Mandatory]
      
      - **\<desc\>** : The description about this work. [Mandatory]
      
      - **\<img\>** : The title image of this work. [Optional]
      
      - **\<buttons\>** : (<u>Use only if multiple buttons were given to this work : </u>) The collection entity for \<button\> [Optional]
        
        - **\<button\>** : The data entity of this button [Optional]
          
          - **\<button_text\>** : The text displayed on this button. [Mandatory]
          
          - **\<button_url\>** : The URL linked to this button. [Mandatory]
  
  - <i>Example</i>
    
    - ```textile
      <workBunch>
          <work>
              <title>Research Work 1</title>
              <desc>Great Research Work 1</desc>
              <img>img/works/research1/picture.png</img>
              <buttons>
                  <button>
                      <button_text>Download</button_text>
                      <button_url>files/works1/research1.doc</button_url>
                  </button>
                  <button>
                      <button_text>Source Code</button_text>
                      <button_url>files/works1/research1.tgz</button_url>
                  </button>
              </buttons>
          </work>
      
          <work>
              <title>Platform Work</title>
              <desc>EDUPlat Work</desc>
              <img>img/works/eduplat/eduplat.png</img>
              <button>
                  <button_text>EDUPlat</button_text>
                  <button_url>https://example.com</button_url>
              </button>
          </work>
      </workBunch>
      ```

- <b>events.xml</b> : The event information for the tab : Hosted Events.
  
  - <i>Data Structure</i>
    
    - ```textile
      <events>
         |- <event>
              |- <title>
              |- <type>
              |- <location>
              |- <date>
              |- <url>
              |- <desc>
      ```
  
  - **\<events\>** : The collection entity of \<event\>
    
    - **\<event\>** : The data entity of event. 
      
      - **\<title\>** : The title (presumbly abbr.) of the event. [Mandatory]
      
      - **\<type\>** : The event type. [Mandatory]
      
      - **\<location\>** : The location of the event. [Mandatory]
      
      - **\<date\>** : The duration of the date. [Mandatory]
      
      - **\<url\>** : The URL to the webpage of the event. [Optional]
      
      - **\<desc\>** : The description of the event. (Full title) [Optional]
  
  - <i>Example</i>
    
    - ```textile
      <events>
          <event>
              <title>ACACONF 1995</title>
              <type>Conference</type>
              <location>City, Country</location>
              <date>1-2 March, 1995</date>
              <url>https://example.com</url>
              <desc>The 1995 Academic Conference</desc>
          </event>
      </events>
      ```

- <b>footer.xml</b> : The affliation groups' information at the bottom of the page.
  
  - <i>Data Structure</i>
    
    - ```textile
      <relatedGroups>
         |- <relatedGroup>
               |- <name>
               |- <url>
               |- <img>
      ```
  
  - **\<relatedGroups\>** : The collection entity of \<relatedGroup\>
    
    - **\<relatedGroup\>** : The data entity of affiliation group's information
      
      - **\<name\>** : The name of the affiliation group. [Mandatory]
      
      - **\<url\>** : The URL to the webpage of the affiliation group. [Mandatory]
      
      - **\<img\>** : The image that represents the affiliation group. [Mandatory]
  
  - <i>Example</i>
    
    - ```textile
      <relatedGroups>
          <relatedGroup>
              <name>Fabrikam Inc.</name>
              <url>https://example.com</url>
              <img>img/footer/fabrikam.png</img>
          </relatedGroup>
      </relatedGroups>
      ```

## Notes

<b>1. Resources for sub-sites:</b> Please kindly not placing sub-sites' related resources to root folders as they are resources that are related to the main site. Please place sub-sites' resources in sub-folders respectively.

<b>2. Avoid huge files:</b> If you need to demonstrate related resource that is greater than <b>200 MB</b>, put this resource somewhere (e.g., OneDrive, Google Drive, TeraBox...). Otherwise: 1. You need to get it through by Git-CLI, and 2. It may cause the total size of the site exceeds Github's allowance too quickly (5GB).

<b>3. If that is active, keep it as separate repository:</b> If any subsites are still under active update or using, please keep it as separate repository - Using "Github Pages" settings to hook it under the website.

<b>4. Private matters shouldn't be here:</b> Please do not push any updates that may breach or distrub your's or one's privacy, as these updates can leave traces in history, even if these updates are removed later.
