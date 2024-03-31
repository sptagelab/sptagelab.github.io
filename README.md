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
  
  - Commonly used HTML enties:
    
    - ```textile
      < : &lt;
      ```
    
    - ```textile
      > : &gt;
      ```
    
    - ```textile
      " : &quot;
      ```
    
    - ```textile
      & : &amp;
      ```
    
    - ```textile
      space : &nbsp;
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

- <b>news.xml</b> : News information for the page tab: Home.
  
  - <i>Data Structure</i>
    
    - ```textile
      <newsBunch>
          |- <news>
                |- <date>
                |- <content>
      ```
  
  - **\<date\>** : The date and time when the piece of news was published. It must follow the format: <b>dd mm, YYYY HH:MM:SS</b> [Mandatory]
  
  - **\<content\>** : Information you wish to display. [Mandatory]

- <b>people.xml</b>
  
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
  
  - **\<faculties\>**

- <b>works.xml</b>
  
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
  
  - dsa

- <b>events.xml</b>
  
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
  
  - d

- <b>footer.xml</b>
  
  - <i>Data Structure</i>
    
    - ```textile
      <relatedGroups>
         |- <relatedGroup>
               |- <name>
               |- <url>
               |- <img>
      ```
  
  - d

 

## Notes

<b>1. Resources for sub-sites:</b> Please kindly not placing sub-sites' related resources to root folders as they are resources that are related to the main site. Please place sub-sites' resources in sub-folders respectively.

<b>2. Avoid huge files:</b> If you need to demonstrate related resource that is greater than <b>200 MB</b>, put this resource somewhere (e.g., OneDrive, Google Drive, TeraBox...). Otherwise: 1. You need to get it through by Git-CLI, and 2. It may cause the total size of the site exceeds Github's allowance too quickly (5GB).

<b>3. If that is active, keep it as separate repository:</b> If any subsites are still under active update or using, please keep it as separate repository - Using "Github Pages" settings to hook it under the website.

<b>4. Private matters shouldn't be here:</b> Please do not push any updates that may breach or distrub your's or one's privacy, as these updates can leave traces in history, even if these updates are removed later.
