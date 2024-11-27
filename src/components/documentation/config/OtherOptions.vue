<template>
  <DocumentationSection id="config@otherOptions">
    <template #header><a href="#config@otherOptions">Other Options</a></template>
    <template #content>
      <p>
        All the configurable options you can find in
        <code class="code-inline">/config/reviewer.php</code> file. All the options are self
        explanatory with the documentation.
      </p>
      <CodeBlock language="javascript" :code="config" />
    </template>
  </DocumentationSection>
</template>

<script lang="ts" setup>
import CodeBlock from '@/components/CodeBlock.vue'
import DocumentationSection from '@/components/documentation/DocumentationSection.vue'

const config = `
  <?php

  namespace LakM\\Reviewer;

  use App\\Models\\User;
  use LakM\\Reviewer\\Models\\Media;
  use LakM\\Reviewer\\Models\\Reaction;
  use LakM\\Reviewer\\Models\\Report;
  use LakM\\Reviewer\\Models\\Review;
  use LakM\\Reviewer\\Models\\ReviewStatistic;
  use LakM\\Reviewer\\Policies\\ReviewPolicy;

  return [
      'models' => [
          'review_model' => [
              /**
               * @extends Review
               */
              'class' => Review::class,
              'table' => 'reviews',
          ],
          'review_statistic_model' => [
              /**
               * @extends ReviewStatistic
               */
              'class' => ReviewStatistic::class,
              'table' => 'review_statistics',
          ],
          'media_model' => [
              /**
               * @extends Media
               */
              'class' => Media::class,
              'table' => 'media',
          ],
          'reaction_model' => [
              /**
               * @extends Reaction
               */
              'class' => Reaction::class,
              'table' => 'reactions',
          ],
          'report_model' => [
              /**
               * @extends Report
               */
              'class' => Report::class,
              'table' => 'reports',
          ],
      ],

      /**
       * @extends \Illuminate\Foundation\Auth\User
       */
      'user_model' => User::class,

      /**
       * Overall rating can be decimal number (one decimal number)
       */
      'enable_decimal_rating' => true,

      /**
       * Enable to rate for subtypes like Quality, Durability
       */
      'enable_sub_rating' => true,

      /**
       * Enable to rate for subtypes like Quality, Durability
       */
      'enable_media' => false,

      /**
       * Max uploadable media size limit in killobytes
       */
      'media_size' => 2048,

      /**
       * Allowed media types as describe in
       * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept
       */
      'media_types' => 'image/*,video/*',

      /**
       * Attachable no of media per review
       */
      'no_of_media_per_review' => 5,

      /**
       * Available options, page, scroll
       */
      'pagination' => 'page',

      'show_verified_status' => true,

      'show_country' => false,

      /**
       * Database column or accessor to get name of the user in users table
       */
      'reviewer_name_column' => 'name',

      /**
       * Database column or accessor to get name of the user in users table
       */
      'reviewer_email_column' => 'email',

      'login_url_name' => 'login',

      'permissions' => [
          'create_review' => [ReviewPolicy::class, 'store'],
          'approve_review' => [ReviewPolicy::class, 'approve'],
          'verify_review' => [ReviewPolicy::class, 'verify'],
          'create_review_reaction' => [ReviewPolicy::class, 'storeReaction'],
          'create_review_report' => [ReviewPolicy::class, 'storeReport'],
          'update_review_report' => [ReviewPolicy::class, 'updateReport'],
          'delete_review_report' => [ReviewPolicy::class, 'deleteReport'],
      ],

      /**
       * When set to true only approved reviews are counted
       */
      'approval_required' => false,

      /**
       * Whether a product can be rated without a review
       */
      'empty_reviews' => false,

      /**
       * Whether user should provide recommendation or not
       */
      'force_recommendation' => false,

      'avatar' => [
          /**
           * Database column or model accessor name to
           * get the url of profile photo.
           * Leave null if profile photo is not supported
           */
          'column' => '',
          'default' => [
              /**
               * when profile photo url haven't been set
               * this url is used.
               */
              'url' => '',
              /**
               * if this is empty
               *  gravatar service (https://docs.gravatar.com/api/avatars/images/) is used
               * to generate an avatar.
               */
              'gravatar' => [
                  'default' => 'mp',
              ],
          ],
      ],

  ];

`
</script>
