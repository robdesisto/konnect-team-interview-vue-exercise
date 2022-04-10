# Cross Cutting Components

I moved the Catalog component out of here because it felt like the wrong place in the hierarchy.
The directory `src/components` should really be for cross-cutting and or shared things. If the catalog
is used multiple places, by all means scope it up to this level.

As it stands, it feels more like a view unto itself and can replace the rather useless "Home" component.
Otherwise, it feels like an unnecessary indirection, and I'd prefer to co-locate things closest to where
they're used. Over "commonizing" things usually leads to snarled dependency tree and bloated bundles.
